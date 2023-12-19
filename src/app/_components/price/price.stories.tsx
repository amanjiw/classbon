import { Meta, StoryObj } from "@storybook/react";
import Price from "./Price";

const meta: Meta<typeof Price> = {
	component: Price,
	tags: ["autodocs"],
	decorators: [
		(Story) => {
			document.documentElement.classList.add("dark");
			return <Story />;
		},
	],
};

export default meta;

type Story = StoryObj<typeof Price>;

export const PriceTypeis: Story = {
	render: () => {
		return (
			<>
				<Price price={200000} />
				<Price />
			</>
		);
	},
};
