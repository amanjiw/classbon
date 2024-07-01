"use server";

import { redirect } from "next/navigation";
import { signinScheme } from "@/app/(auth)/signin/types/signin.schema";

export const signInAction = async (
	formState: { message: string },
	formData: FormData
) => {
	const mobile = formData.get("mobile");

	const validateData = signinScheme.safeParse({
		mobile,
	});

	console.log("server action");

	if (!validateData.success) {
		return { message: "خطا در فرمت موبایل" };
	} else {
		try {
			throw "خطا در برقراری با سرور";
		} catch (error) {
			return { message: error as string };
		}
	}
};
