// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith('/items')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

 
  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/items-list', request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};