/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { IconHome, IconProgressCheck } from "@tabler/icons-react";
import { pushInfoNotification } from "../../services/NotificationService";
import type { MenuItem, Section } from "../../providers/MenuContext";

export function createGeneralHelpSection(items: MenuItem[]): Section {
    return {
        id: "help-general",
        items: items,
    };
}

export function createCheckForUpdatesSection(items: MenuItem[]): Section {
    return {
        id: "help-updates",
        items: items,
    };
}

export function createHomePageSection(items: MenuItem[]): Section {
    return {
        id: "home-page",
        items: items,
    };
}

export function createHomePageMenuItem(action: () => void): MenuItem {
    return {
        id: "homepage",
        title: "Home page",
        icon: { icon: IconHome, position: "left" },
        task: {
            action: () => {
                action();
            },
            type: "direct",
        },
    };
}

export function createCheckForUpdatesMenuItem(): MenuItem {
    return {
        id: "updates",
        title: "Check for updates",
        icon: { icon: IconProgressCheck, position: "left" },
        task: {
            action: async () => {
                pushInfoNotification("Checking for updates...");
                await window.electron.checkForUpdates();
            },
            type: "direct",
        },
    };
}
