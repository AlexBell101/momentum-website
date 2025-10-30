// app/api/demo-request/route.ts
// Next.js 14 App Router API endpoint for HubSpot integration

import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

// Initialize HubSpot client
const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, source } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Check if contact already exists in HubSpot
    let contactId: string | null = null;

    try {
      const searchResult = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'EQ' as any,
            value: email
          }]
        }],
        properties: ['email', 'firstname', 'lastname'],
        limit: 1
      });

      if (searchResult.results && searchResult.results.length > 0) {
        contactId = searchResult.results[0].id;
      }
    } catch (searchError) {
      console.error('Error searching for contact:', searchError);
      // Continue to create new contact
    }

    if (contactId) {
      // Update existing contact
      await hubspotClient.crm.contacts.basicApi.update(contactId, {
        properties: {
          demo_request_date: new Date().toISOString(),
          demo_request_source: source || 'website',
          lifecyclestage: 'marketingqualifiedlead'
        }
      });

      console.log(`Updated existing contact: ${contactId}`);
    } else {
      // Create new contact
      const newContact = await hubspotClient.crm.contacts.basicApi.create({
        properties: {
          email,
          firstname: firstName || '',
          lastname: lastName || '',
          company: company || '',
          lifecyclestage: 'lead',
          lead_source: source || 'website',
          demo_request_date: new Date().toISOString()
        }
      });

      contactId = newContact.id;
      console.log(`Created new contact: ${contactId}`);
    }

    // Optional: Send notification to Slack
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🎯 New demo request from ${email}`,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*New Demo Request*\n\n*Email:* ${email}\n*Source:* ${source || 'website'}`
              }
            }
          ]
        })
      });
    }

    return NextResponse.json({
      success: true,
      contactId,
      message: 'Demo request submitted successfully'
    });

  } catch (error: any) {
    console.error('Error submitting demo request:', error);

    return NextResponse.json(
      {
        error: 'Failed to submit demo request',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
