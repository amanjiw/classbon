"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const TopNavigation: React.FC = () => {
	const pathname = usePathname();
	const menuItems: NavigationMenuItem[] = [
		{ title: "صفحه اصلی", href: "/" },
		{ title: "دوره های ریک و نکست", href: "/courses" },
		{ title: "مطالب و مقالات", href: "/blog" },
	];
	return (
		<ul className="flex gap-x-8 mr-12">
			{menuItems.map((item) => {
				const isActive = pathname === item.href;

				return (
					<li key={`navigation-${item.href}`}>
						<Link
							className={`hover:text-primary transition-colors pb-2 ${
								isActive &&
								"border-b-2 dark:text-primary dark:border-primary/30"
							}`}
							href={item.href}
						>
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default TopNavigation;
