/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { Priority, RootMenuItem } from "../../providers/MenuContext";

export function createSettingsRootMenuItem(
    action: () => void,
    priority: Priority = 9,
): RootMenuItem {
    return {
        id: "settings",
        title: "Settings",
        task: {
            action: action,
            type: "direct",
        },
        priority: priority,
    };
}
