import React from "react";
import { PriceProps } from "./price.types";
import { IconToman } from "../icons/icons";
import Badge from "../badge/Badge";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
	tiny: { svgSize: 16, textSize: "text-md" },
	small: { svgSize: 18, textSize: "text-xl" },
	large: { svgSize: 20, textSize: "text-2xl" },
	normal: { svgSize: 22, textSize: "text-3xl" },
};

const Price: React.FC<PriceProps> = ({
	size = "normal",
	text = "free",
	className,
	price,
}) => {
	const svgSize = sizeClasses[size].svgSize;

	return (
		<>
			{price != null && price > 0 ? (
				<span
					className={`flex items-center font-bold gap-1 dark:text-white/90 ${sizeClasses[size].textSize} ${className}`}
				>
					{price.toLocaleString()}
					<IconToman
						strokeWidth={1.5}
						viewBox="0 0 16 16"
						width={svgSize}
						height={svgSize}
					/>
				</span>
			) : (
				<Badge variant="success" size="small">
					{text}
				</Badge>
			)}
		</>
	);
};

export default Price;
