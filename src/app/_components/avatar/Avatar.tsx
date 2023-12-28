import React from "react";
import { AvatarProps } from "./avatar.types";
import { Size } from "../types/size.type";
import classNames from "classnames";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";

const sizeCalsses: Record<Size, number> = {
	tiny: 40,
	small: 50,
	normal: 70,
	large: 120,
};

const Avatar: React.FC<AvatarProps> = ({
	variant = "primary",
	className,
	size = "normal",
	src,
	alt = "",
}) => {
	const calsses = classNames("avatar", className, {
		[`avatar-${variant}`]: variant,
		[`${sizeCalsses[size]}`]: size,
	});

	return (
		<div
			className={calsses}
			style={{ width: sizeCalsses[size], height: sizeCalsses[size] }}
		>
			{src ? (
				<Image
					src={src}
					alt={alt}
					width={sizeCalsses[size]}
					height={sizeCalsses[size]}
				/>
			) : (
				<IconUserProfile
					width={sizeCalsses[size] / 2}
					height={sizeCalsses[size] / 2}
				/>
			)}
		</div>
	);
};

export default Avatar;
