import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type BagdeProps = Omit<ComponentBase, "isDisabled"> & {
	children: ReactNode;
};
