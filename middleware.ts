import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Check if the request is coming from eventkarma.ai
  if (hostname === 'eventkarma.ai' || hostname === 'www.eventkarma.ai') {
    const url = request.nextUrl.clone();

    // If the path doesn't already start with /eventkarma, rewrite it
    if (!url.pathname.startsWith('/eventkarma')) {
      // Handle root path
      if (url.pathname === '/') {
        url.pathname = '/eventkarma';
      } else {
        // Handle all other paths
        url.pathname = `/eventkarma${url.pathname}`;
      }

      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
