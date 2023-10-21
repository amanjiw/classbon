import React from "react";
import Image from "next/image";

import TopNavigation from "./TopNavigation";

const Header: React.FC = () => {
	return (
		<header className="border-b dark:border-base-content dark:border-opacity-5">
			<div className="container flex items-center justify-between">
				<Image
					src="/images/logo-light.svg"
					width={100}
					height={36}
					alt="classbon logo"
				/>
				<TopNavigation />
				<div className="mr-auto">auth</div>
			</div>
		</header>
	);
};

export default Header;
