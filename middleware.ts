import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Skip middleware for static files (anything with a file extension)
  if (url.pathname.match(/\.\w+$/)) {
    return NextResponse.next();
  }

  // Paths that should NOT be rewritten (shared across domains)
  const sharedPaths = ['/trust', '/contact', '/privacy', '/api'];
  if (sharedPaths.some(path => url.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the request is coming from eventkarma.ai
  if (hostname === 'eventkarma.ai' || hostname === 'www.eventkarma.ai') {
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
     * Static files are handled by the extension check in the middleware function
     */
    '/((?!api|_next/static|_next/image).*)',
  ],
};
