import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const basicAuth = request.headers.get("Authorization");

  // if (basicAuth) {
  //   const auth = basicAuth.split(" ")[1];
  //   const token = Buffer.from(auth, "base64").toString();
  //   const validToken = verifyToken(token);

  //   if (validToken) return NextResponse.next();
  // }

  // return new Response("Unauthorized", {
  //   status: 401,
  // });

  // return NextResponse.redirect(new URL("/login", request.url));

  console.log("Middleware Executed!", request.nextUrl.pathname);
  console.log("request", request);

  if (request.cookies.has("token")) {
    console.log("[Middleware] You are authorized...");
  } else {
    console.log("[Middleware] Unauthorized, please login!");
  }

  return NextResponse.next();
}

// function verifyToken(token: string) {
//   // logic to validate token
//   return true;
// }

export const config = {
  // https://nextjs.org/docs/advanced-features/middleware#matcher
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
