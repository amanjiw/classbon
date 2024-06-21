import { Notification } from "@/types/notification.interface";
import { create } from "zustand";

import { generateId } from "@/utils/string";

type NotificationState = {
	notifications: Notification[];
	showNotification: (notification: Omit<Notification, "id">) => void;
	dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set, get) => {
	return {
		notifications: [],
		showNotification: (notification) => {
			const id = generateId();
			set((state) => ({
				notifications: [
					...state.notifications,
					{ id, ...notification },
				],
			}));

			setTimeout(() => {
				get().dismissNotification(id);
			}, 5000);
		},

		dismissNotification: (id) => {
			set((state) => ({
				notifications: state.notifications.filter((p) => p.id !== id),
			}));
		},
	};
});
