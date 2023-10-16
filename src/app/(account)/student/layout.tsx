import { ReactNode } from "react";

const StudentLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<aside></aside>
			<main>{children}</main>
		</>
	);
};

export default StudentLayout;
