import axios from "axios";
import { API_URL } from "@/configs/public";

import {
	Problem,
	BadrequestError,
	NetworkError,
	NotFoundError,
	UnauthorizedError,
	UnhandledExceptionError,
	ValidationError,
} from "@/types/http-errors.interface";

type ApiError =
	| BadrequestError
	| NetworkError
	| NotFoundError
	| UnhandledExceptionError
	| UnauthorizedError
	| ValidationError;

// ## =>

export const httpServer = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

httpServer.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error?.response) {
			const statusCode = error.response?.status;
		}
	}
);
