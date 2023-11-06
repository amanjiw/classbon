import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
describe("Button", () => {
	test("renders a default button", () => {
		render(<Button>Click here</Button>);
		const button = screen.getByText("Click here");
		expect(button).toBeInTheDocument();
	});

	test("disables the button when isDisabled prop is true", () => {
		render(<Button isDisabled>Click here</Button>);
		const button = screen.getByRole("button", { name: "Click here" });
		expect(button).toBeDisabled();
	});

	test("applies the correct css class for difrrent button variants", () => {
		const { rerender } = render(
			<Button variant="primary">Click here</Button>
		);
		expect(screen.getByRole("button")).toHaveClass("btn-primary");

		rerender(<Button variant="info">Click hrere</Button>);
        expect(screen.getByRole("button")).toHaveClass("btn-info");

	});
});
