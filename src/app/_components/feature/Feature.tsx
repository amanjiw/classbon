import React from "react";
import { FeatureProps } from "./feature.types";
import Image from "next/image";

const Feature: React.FC<FeatureProps> = ({
	feature: { description, icon, title },
}) => {
	return (
		<article className="flex flex-col items-center gap-4 lg:items-start ">
			<Image height={52} width={52} alt="" src={icon} />
			<h4>{title}</h4>
			<p>{description}</p>
		</article>
	);
};

export default Feature;
