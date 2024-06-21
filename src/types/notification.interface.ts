export interface Notification {
	duration?: number;
	message: string;
	id: string;
	type: NotificationType;
}

export type NotificationType = "success" | "error" | "info" | "warning";
