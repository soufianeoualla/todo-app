import authConfig from "./auth.config";
import NextAuth from "next-auth";
export const { auth } = NextAuth(authConfig);
export default auth((req) => {
  // req.auth
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
