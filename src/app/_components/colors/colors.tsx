"use client";
import React from "react";
import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";

const getTextColor = (backgroundColor: string): string =>
	colord(backgroundColor).isDark() ? "#dddddd" : "#333333";

const Colors: React.FC = () => {
	return (
		<div className="flex flex-wrap justify-center" dir="ltr">
			{Object.entries(tailwindColors).map(([name, color]) => (
				<ColorBox name={name} color={color} />
			))}
		</div>
	);
};

export default Colors;

const ColorBox: React.FC<{ name: string; color: string }> = ({
	color,
	name,
}) => {
	return (
		<div
			lang="en"
			className="w-96 h-60 flex flex-col  items-center justify-center text-center uppercase"
			style={{ backgroundColor: color, color: getTextColor(color) }}
		>
			<span>{name}</span>
			<span>{color}</span>
		</div>
	);
};
