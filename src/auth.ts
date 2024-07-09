import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { createData } from "./core/http-service/http-service";
import { VerifyUserModle } from "./app/(auth)/verify/_types/verify-user.type";
import { User } from "./types/user.interface";

declare module "next-auth" {
	interface User {
		accessToken: string;
	}
}

export const {
	signIn,
	signOut,
	auth,
	handlers: { GET, POST },
} = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username: { label: "username", type: "text" },
				code: { label: "code", type: "text" },
			},
			async authorize(credentials, request) {
				try {
					const user = await createData<VerifyUserModle, User>("", {
						code: credentials.code as string,
						username: credentials.username as string,
					});

					return {
						accessToken: user.token,
					};
				} catch (error: unknown) {
					console.log(error);
					throw new Error("");
				}
			},
		}),
	],
});
