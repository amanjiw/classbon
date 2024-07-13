"use server";

import { redirect } from "next/navigation";
import { signinScheme } from "@/app/(auth)/signin/types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { Signin } from "@/app/(auth)/signin/types/signin.types";
import { SendAuthCode } from "@/app/(auth)/verify/_types/verify-user.type";
import { Problem } from "@/types/http-errors.interface";
import { signIn, signOut } from "@/auth";
import { title } from "process";

export const signInAction = async (
	formState: OperationResult<string> | null,
	formData: FormData
) => {
	const mobile = formData.get("mobile") as string;

	// const validateData = signinScheme.safeParse({
	// 	mobile,
	// });

	// console.log("server action");

	// if (!validateData.success) {
	// 	return { message: "خطا در فرمت موبایل" };
	// } else {
	return serverActionWrapper(async () =>
		createData<Signin, string>("/signin", { mobile })
	);
	// }
};

export const sendAuthCode = (
	formState: OperationResult<string> | null,
	mobile: string
) => {
	return serverActionWrapper(
		async () =>
			await createData<SendAuthCode, string>("/send-auth-code", {
				mobile,
			})
	);
};

export const verify = async (
	state: Problem | undefined,
	formData: FormData
) => {

	try {
		 await signIn("credentials", formData);
	} catch (error) {
		//TODO:
		return {
			status: 0,
			title: "",
		} satisfies Problem;
	}
};

export const logout = async () => {
	await signOut();
};
