"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeaderUserSection = () => {
	const {data:session } = useSession();

	return <div>

        {session?.user ? <p>{session.user.mobile}</p>:<Link href={"/signin"} >ورود یا ثبت نام</Link> }
    </div>;
};

export default HeaderUserSection;
