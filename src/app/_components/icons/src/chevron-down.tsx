import BaseIcon from "@/app/_components/icons/src/BaseIcon";
import { SvgIcon } from "@/app/_components/icons/src/icon.types";

export default function SvgIcon(props: SvgIcon) {
	return (
		<BaseIcon  {...props} >
		    <path d="M21 7.5L12 16.5L3 7.5"/>
		</BaseIcon>
	);
}