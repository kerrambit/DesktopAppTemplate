/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { app, BrowserWindow, Menu, Tray } from "electron";
import path from "path";
import { getAssetsPath } from "./utils/pathResolver.js";
import { AutoUpdater } from "./AutoUpdater.js";

// TODO: use system language for this, default English
export function createTray(mainWindow: BrowserWindow, updater: AutoUpdater) {
    const tray = new Tray(
        path.join(
            getAssetsPath(),
            process.platform === "darwin"
                ? "trayIconTemplate.png"
                : "trayIcon.png",
        ),
    );
    const contextMenu = Menu.buildFromTemplate([
        {
            label: "My App",
            type: "header",
            enabled: false,
            click: () => {
                app.quit();
            },
        },
        { type: "separator" },
        {
            label: "Show My App",
            click: () => {
                mainWindow.show();
                if (app.dock) {
                    app.dock.show();
                }
            },
        },
        {
            label: "Check For Updates...",
            click: () => {
                updater.checkForUpdates(true);
            },
        },
        { type: "separator" },
        {
            label: "Quit My App",
            click: () => {
                app.quit();
            },
        },
    ]);

    tray.setToolTip("My App");
    tray.setContextMenu(contextMenu);
}
