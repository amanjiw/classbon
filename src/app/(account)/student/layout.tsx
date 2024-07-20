import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const StudentLayout = async ({ children }: { children: ReactNode }) => {
	const session = await auth();

	if (!session || !session?.user) {
		redirect("/signin");
	}

	return (
		<>
			<aside></aside>
			<main>{children}</main>
		</>
	);
};

export default StudentLayout;
