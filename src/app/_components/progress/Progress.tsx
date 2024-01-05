import React from "react";
import { ProgressProps } from "./progress.types";
import { Size } from "../types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
	tiny: "progress-xs",
	small: "progress-sm",
	normal: "progress-md",
	large: "progress-lg",
};

const Progress: React.FC<ProgressProps> = ({
	className,
	size = "small",
	variant = "neutral",
	value,
}) => {
	const classes = classNames("progress", className, {
		[`progress-${variant}`]: variant,
		[`${sizeClasses[size]}`]: size,
	});

	return <progress value={value} max={100} className={`${classes}`} />;
};

export default Progress;
