"use client";

import { logout } from "@/actions/auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Loading from "../loading/Loading";
import { useRouter } from "next/navigation";

const HeaderUserSection = () => {
	const { data: session } = useSession();
	const [signOutState, action] = useFormState(logout, undefined);
	const router = useRouter();

	useEffect(() => {
		if (signOutState?.isSuccess) {
			const fetchSession = async () => await getSession();
			fetchSession();
			router.push("/");
		}
	}, [signOutState, router]);

	return (
		<div>
			{session?.user ? (
				<>
					<form action={action as () => {}}>
						<LogOutBtn />
					</form>
					<p>{session.user.mobile}</p>
				</>
			) : (
				<Link href={"/signin"}>ورود یا ثبت نام</Link>
			)}
		</div>
	);
};

const LogOutBtn = () => {
	const { pending } = useFormStatus();

	return (
		<button className="text-error">
			{" "}
			{pending && <Loading size="tiny" />} خروج از حساب کاربری
		</button>
	);
};

export default HeaderUserSection;
