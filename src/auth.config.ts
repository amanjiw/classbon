import { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/signin",
	},

	callbacks: {
		authorized: async ({ auth, request }) => {
			const { nextUrl } = request;

			const isAuthenticated = !!auth?.user;
			const authRoutes = ["/signin", "/verify"];
			const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

			if (isAuthenticated && isAuthRoutes) {
				return Response.redirect(new URL("/student/courses", nextUrl));
			}

			const isProtectedRoute = nextUrl.pathname.startsWith("/student");

			if (!isAuthenticated && isProtectedRoute) {
				return Response.redirect(new URL("/signin", nextUrl));
			}

			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
