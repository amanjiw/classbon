import { z } from "zod";

export const signinScheme = z.object({
	mobile: z
		.string()
		.regex(/^09[0-9]$/, {
			message: "شماره موبایل باید 11 رقم باشد، و فرمت آن صحیح باشد.",
		}),
});
