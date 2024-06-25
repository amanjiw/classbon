"use client";

import React, {
	FC,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
} from "react";
import { AuthCodeProps, AuthInputProps, AuthCodeRef } from "./authCode.types";
import classNames from "classnames";

const AuthCode = forwardRef<AuthCodeRef, AuthCodeProps>(
	(
		{
			variant = "ghost",
			autoFocus = true,
			isDisabled,
			length = 5,
			className,
			onChange,
		},
		ref
	) => {
		// =>

		useEffect(() => {
			if (autoFocus) {
				inputsRef.current[0].focus();
			}
		}, [autoFocus]);

		useImperativeHandle(ref, () => ({
			focus: () => {
				if (inputsRef.current) {
					inputsRef.current[0].focus();
				}
			},
			clear: () => {
				if (inputsRef.current) {
					for (let i = 0; i < inputsRef.current.length; i++) {
						inputsRef.current[i].value = "";
					}

					inputsRef.current[0].focus();
				}

				sendResults();
			},
		}));

		if (length < 1) {
			throw new Error("تعداد ارقام باید بزرگ تر از صفر باشد.");
		}

		const inputsRef = useRef<Array<HTMLInputElement>>([]);

		const inputProps: AuthInputProps = {
			min: "0",
			max: "9",
			pattern: "[0-9]{1}",
		};

		const sendResults = () => {
			const result = inputsRef.current
				.map((input) => input.value)
				.join("");
			onChange(result);
		};

		const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const {
				target: { value, nextElementSibling },
			} = event;

			if (value.match(inputProps.pattern)) {
				if (nextElementSibling !== null) {
					(nextElementSibling as HTMLInputElement).focus();
				}
			} else {
				event.target.value = "";
			}
			sendResults();
		};

		const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) =>
			event.target.select();

		const handleOnKeyDown = (
			event: React.KeyboardEvent<HTMLInputElement>
		) => {
			const { key } = event;
			const target = event.target as HTMLInputElement;

			if (key === "Backspace") {
				if (target.value === "") {
					if (target.previousElementSibling !== null) {
						const prevInput =
							target.previousElementSibling as HTMLInputElement;

						prevInput.value = "";
						prevInput.focus();
					}
				} else {
					target.value = "";
				}
			}

			sendResults();
		};

		const classes = classNames("textbox flex-1 w-1 text-center", {
			[`textbox-${variant}`]: variant,
		});

		const inputs = [];
		for (let i = 0; i < length; i++) {
			inputs.push(
				<input
					key={i}
					type="text"
					maxLength={1}
					className={classes}
					disabled={isDisabled}
					onChange={handleOnChange}
					onFocus={handleOnFocus}
					onKeyDown={handleOnKeyDown}
					ref={(element: HTMLInputElement) => {
						inputsRef.current[i] = element;
					}}
				/>
			);
		}

		return <div className={`flex gap-4 flex-row-reverse`}>{inputs}</div>;
	}
);

export default AuthCode;
