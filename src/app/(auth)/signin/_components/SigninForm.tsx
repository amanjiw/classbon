"use client";

import Button from "@/app/_components/button/Button";
import { useForm } from "react-hook-form";
import { Signin } from "../types/signin.types";
import TextInput from "@/app/_components/form-input/text-input/TextInput";
import { useSignin } from "../_api/signin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/stores/notification-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinScheme } from "../types/signin.schema";
import { useFormState } from "react-dom";
import { signInAction } from "@/actions/auth";
import { useEffect } from "react";

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<Signin>({ resolver: zodResolver(signinScheme) });

	const [formState, action] = useFormState(signInAction, null);

	const router = useRouter();
	const showNotification = useNotificationStore(
		(state) => state.showNotification
	);

	useEffect(() => {
		if (formState && !formState.isSuccess && formState.error) {
			showNotification({
				message: formState.error.detail!,
				type: "error",
			});
		} else if (formState && formState.isSuccess) {
			router.push(`/verify?mobile=${getValues("mobile")}`);
			showNotification({ message: "کد ارسال شد.", type: "info" });
			console.log(formState.response);
		}
	}, [showNotification, formState]);

	const onSubmit = (data: Signin) => {
		const formData = new FormData();
		formData.append("mobile", data.mobile);
		action(formData);
	};

	return (
		<>
			<h5 className="text-2xl">ورود | ثبت نام</h5>
			<p className="mt-2">
				دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
			</p>
			<form
				className="flex flex-col gap-6 mt-16"
				onSubmit={handleSubmit(onSubmit)}
			>
				<TextInput<Signin>
					register={register}
					name={"mobile"}
					errors={errors}
					placeholder="شماره موبایل"
				/>
				<Button
					type="submit"
					variant="primary"
					isLoading={signin.isPending}
				>
					تایید و دریافت کد
				</Button>
			</form>
		</>
	);
};

export default SignInForm;
