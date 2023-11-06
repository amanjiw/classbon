import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import results from "../../../../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ["autodocs"],
	decorators: [
		(Story) => {
			document.documentElement.classList.add("dark");
			return <Story />;
		},
	],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Tests: Story = {
	render: (args) => <Button {...args}>Click here</Button>,
};

Tests.decorators = [withTests({ results })];

export const BrandColors: Story = {
	render: () => (
		<>
			<Button>Default</Button>
			<Button variant="neutral">Neutral</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="accent">Accent</Button>
			<Button variant="ghost">Ghost</Button>
			<Button isLink>Link</Button>
		</>
	),
};

export const StateColors: Story = {
	render: () => {
		return (
			<>
				<Button variant="success">Success</Button>
				<Button variant="info">Info</Button>
				<Button variant="error">Error</Button>
				<Button variant="warning">Warning</Button>
			</>
		);
	},
};

export const OutlineButtons: Story = {
	render: () => {
		return (
			<>
				<Button isOutline>Default</Button>
				<Button variant="neutral" isOutline>
					Neutral
				</Button>
				<Button variant="primary" isOutline>
					Primary
				</Button>
				<Button variant="secondary" isOutline>
					Secondary
				</Button>
				<Button variant="accent" isOutline>
					Accent
				</Button>
				<Button variant="ghost" isOutline>
					Ghost
				</Button>
			</>
		);
	},
};

export const OutlineStateButtons: Story = {
	render: () => (
		<>
			<Button variant="success" isOutline>
				Success
			</Button>
			<Button variant="info" isOutline>
				Info
			</Button>
			<Button variant="error" isOutline>
				Error
			</Button>
			<Button variant="warning" isOutline>
				Warning
			</Button>
		</>
	),
};

export const ButtonSizes: Story = {
	render: () => (
		<>
			<Button variant="neutral" size="tiny">
				Tiny
			</Button>
			<Button variant="neutral" size="small">
				Small
			</Button>
			<Button variant="neutral" size="normal">
				Normall
			</Button>
			<Button variant="neutral" size="large">
				large
			</Button>
		</>
	),
};

export const WideButton: Story = {
	render: () => (
		<>
			<Button variant="neutral" shape="wide">
				Wide Button
			</Button>
		</>
	),
};

export const FullButton: Story = {
	render: () => (
		<>
			<Button variant="neutral" shape="full">
				Full Button
			</Button>
		</>
	),
};

export const SqureButtons: Story = {
	render: () => (
		<>
			<Button variant="neutral" shape="square" size="tiny">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</Button>
			<Button variant="neutral" shape="square" size="small">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</Button>
			<Button variant="neutral" shape="square" size="normal">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</Button>
			<Button variant="neutral" shape="square" size="large">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</Button>
		</>
	),
};

export const DisabledButton: Story = {
	render: () => (
		<>
			<Button variant="neutral" isDisabled>
				Disabled Button
			</Button>
		</>
	),
};

export const IconButtons: Story = {
	render: () => (
		<>
			<Button variant="neutral">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
				Submit
			</Button>
			<Button variant="neutral">
				Submit
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
			</Button>
		</>
	),
};

export const ButtonWithLoading: Story = {
	render: () => (
		<>
			<Button
				variant="neutral"
				isLoading={true}
				loadingText="Loading"
			></Button>
			<Button
				variant="neutral"
				isLoading={true}
				loadingType={"ring"}
				loadingText="Loading"
			></Button>
			<Button
				variant="primary"
				isLoading={true}
				loadingText="Loading"
			></Button>
			<Button
				variant="accent"
				isOutline
				isLoading={true}
				loadingType={"ring"}
				loadingText="Loading"
			></Button>
		</>
	),
};
