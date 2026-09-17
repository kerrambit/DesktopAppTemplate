/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { NotificationData } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

const checkIcon = <IconCheck size={20} />;

export function SuccessNotification(message: string): NotificationData {
    return {
        id: crypto.randomUUID(),
        title: "Success",
        message: message,
        position: "top-right",
        withCloseButton: true,
        autoClose: false,
        color: "green",
        icon: checkIcon,
    };
}
