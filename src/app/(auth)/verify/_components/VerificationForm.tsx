"use client";

import Link from "next/link";
import Button from "@/app/_components/button/Button";
import AuthCode from "@/app/_components/auth-code/AuthCode";
import { useEffect, useRef, useState } from "react";
import { AuthCodeRef } from "@/app/_components/auth-code/authCode.types";
import { Timer } from "@/app/_components/timer/Timer";
import { TimerRef } from "@/app/_components/timer/timer.type";
import {} from "../_api/send-auth-code";
import { useNotificationStore } from "@/stores/notification-store";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { VerifyUserModle } from "../_types/verify-user.type";
import { useFormState } from "react-dom";
import { sendAuthCode } from "@/actions/auth";

const getTwoMinutesFromNow = () => {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 120);
	return time;
};

const VerificationForm = ({ mobile }: { mobile: string }) => {
	const [showResendCode, setShowResendCode] = useState<boolean>(false);
	const authCodeRef = useRef<AuthCodeRef>(null);
	const timerRef = useRef<TimerRef>(null);

	const {
		handleSubmit,
		setValue,
		register,
		formState: { errors, isValid },
	} = useForm<VerifyUserModle>();

	const showNotification = useNotificationStore(
		(state) => state.showNotification
	);

	const [sendAuthCodeState, sendAuthCodeAction] = useFormState(
		sendAuthCode,
		null
	);

	const params = useSearchParams();
	const username = params.get("mobile")!;

    useEffect(() => {
        if (
            sendAuthCodeState &&
            !sendAuthCodeState.isSuccess &&
            sendAuthCodeState.error
        ) {
            showNotification({
                message: sendAuthCodeState.error.detail!,
                type: "error",
            });
        } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
            console.log(sendAuthCodeState.response);
            showNotification({
                message: "کد تایید به شماره شما ارسال شد",
                type: "info",
            });
        }
    }, [sendAuthCodeState, showNotification]);

	const onSubmit = (data: VerifyUserModle) => {
		data.username = username;
		console.log(data);
	};

	register("code", { validate: (value) => (value ?? "").length === 5 });

	const resendAuthCode = () => {
		timerRef.current?.restart(getTwoMinutesFromNow());
		setShowResendCode(false);
		sendAuthCodeAction(mobile);
	};

	return (
		<>
			<h5 className="text-2xl">کد تایید</h5>
			<p className="mt-2">
				دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
			</p>
			<form
				className="flex flex-col gap-6 mt-10 flex-1"
				onSubmit={handleSubmit(onSubmit)}
			>
				<AuthCode
					className="mt-10"
					ref={authCodeRef}
					onChange={(value) => {
						setValue("code", value, { shouldValidate: true });
					}}
				/>
				<Timer
					className="my-8"
					size="small"
					expiryTimestamp={getTwoMinutesFromNow()}
					showDays={false}
					showHours={false}
					onExpire={() => setShowResendCode(true)}
					ref={timerRef}
				/>
				<Button
					isLink={true}
					isDisabled={!showResendCode}
					onClick={resendAuthCode}
				>
					ارسال مجدد کد تایید
				</Button>
				<Button type="submit" variant="primary" isDisabled={!isValid}>
					تایید و ادامه
				</Button>
				<div className="flex items-start gap-1 justify-center mt-auto">
					<span>برای اصلاح شماره موبایل</span>
					<Link href="/signin">اینجا</Link>
					<span>کلیک کنید</span>
				</div>
			</form>
		</>
	);
};

export default VerificationForm;
