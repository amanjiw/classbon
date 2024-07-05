"use server";

import { redirect } from "next/navigation";
import { signinScheme } from "@/app/(auth)/signin/types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { Signin } from "@/app/(auth)/signin/types/signin.types";

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
