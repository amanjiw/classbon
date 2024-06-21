import { createData } from "@/core/http-service/http-service";
import { Signin } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

const signin = (model: Signin): Promise<void> =>
	createData<Signin, void>("/signin", model);

type UseSigninOption = { onSuccess: () => void };

export const useSignin = ({ onSuccess }: UseSigninOption) => {
	const { mutate: submit, isPending } = useMutation({
		mutationFn: signin,
		onSuccess,
	});

	return { submit, isPending };
};
