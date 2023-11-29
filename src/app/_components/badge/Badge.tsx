import React from "react";
import { BagdeProps } from "./badge.type";
import classNames from "classnames";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
	tiny: "badge-xs",
	small: "badge-sm",
	normal: "",
	large: "badge-lg",
};

const Badge: React.FC<BagdeProps> = ({
	children,
	className,
	size = "tiny",
	variant,
}) => {
	const classes = classNames(
		"badge",
		className,
		{
			[`badge-${variant}`]: variant,
		},
		{ [`${sizeClasses[size]}`]: size }
	);

	return <span className={classes}>{children}</span>;
};

export default Badge;
