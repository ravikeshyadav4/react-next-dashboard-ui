import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  if((request.nextUrl.pathname == "/auth/login") || (request.nextUrl.pathname == "/auth/signup")) {
    // return console.log("middleware auth ", request.nextUrl.pathname);
  } else {
    return console.log("middleware auth ", request.nextUrl.pathname);
  }
}
