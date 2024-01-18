interface Problem {
	title: string;
	status: number;
	details?: string;
	errors?: Record<string, string[]>;
}

interface BadrequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledExceptionError extends Problem {}
interface NetworkError extends Problem {}

export type {
	Problem,
	BadrequestError,
	UnauthorizedError,
	ValidationError,
	NotFoundError,
	UnhandledExceptionError,
	NetworkError,
};
