"use client";

import Button from "@/app/_components/button/Button";
import { useForm } from "react-hook-form";
import { Signin } from "../types/signin.types";
import TextInput from "@/app/_components/form-input/text-input/TextInput";
import { useSignin } from "../_api/signin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/stores/notification-store";

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<Signin>();

	const router = useRouter();
	const showNotification = useNotificationStore(
		(state) => state.showNotification
	);

	const signin = useSignin({
		onSuccess: () => {
			router.push(`/verify?mobile=${getValues("mobile")}`);
			showNotification({ message: "کد ارسال شد.", type: "info" });
		},
	});

	const onSubmit = (data: Signin) => {
		console.log(data);
		signin.submit(data);
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
					rules={{
						required: "شماره موبایل الزامی اسن.",
						maxLength: {
							value: 11,
							message: "شماره موبایل باید 11 رقم باشد",
						},
						minLength: {
							value: 11,
							message: "شماره موبایل باید 11 رقم باشد",
						},
					}}
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
