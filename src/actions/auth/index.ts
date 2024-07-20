"use server";

import { redirect } from "next/navigation";
import { signinScheme } from "@/app/(auth)/signin/types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { Signin } from "@/app/(auth)/signin/types/signin.types";
import {
	SendAuthCode,
	VerifyUserModle,
} from "@/app/(auth)/verify/_types/verify-user.type";
import { Problem } from "@/types/http-errors.interface";
import { AuthorizeError, signIn, signOut } from "@/auth";
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
	prevState: OperationResult<void> | undefined,
	model: VerifyUserModle
) => {
	try {
		await signIn("credentials", {
			username: model.username,
			code: model.code,
			redirect: false,
		});
		return {
			isSuccess: true,
		} satisfies OperationResult<void>;
	} catch (error) {
		if (error instanceof AuthorizeError) {
			return {
				isSuccess: false,
				error: error.problem!,
			} satisfies OperationResult<void>;
		}
		throw new Error("");
	}
};

export const logout = async () => {
	await signOut();
};
