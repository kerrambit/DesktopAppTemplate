/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import {
    getAssetsPath,
    getPreloadPath,
    getUiPath,
} from "./utils/pathResolver.js";
import { loadUserSettings } from "./services/localUserSettingsStorage.js";
import { isDev } from "./utils/devUtils.js";
import { createTray } from "./tray.js";
import { logger } from "./utils/logger.js";
import { SplashScreen } from "./SplashScreen.js";
import { registerAllIpcHandlers } from "./ipc/IpcRouter.js";
import { AutoUpdater } from "./AutoUpdater.js";

app.on("ready", async () => {
    // Create main window with preload script. Main window is hidden so splash window can be shown first.
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        show: false,
        webPreferences: {
            preload: getPreloadPath(),
            contextIsolation: true,
            nodeIntegration: false,
            webSecurity: true,
        },
    });

    // For development, use Vite Hot Reload Server on port 5123, see vite.config.ts.
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123/");
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(getUiPath());
    }

    // Create and show splash screen.
    const splash = new SplashScreen(path.join(getAssetsPath(), "splash.png"), {
        width: 500,
        height: 300,
    });

    // Initialize logging.
    logger.initialize();
    logger.info("Application has started.");

    // Register updater handlers;
    const updater = new AutoUpdater();
    updater.registerHandlers(mainWindow);

    // ------------------------------------------------------------- //

    // Create user data path and user settings & recent files filepaths.
    const userDataPath = app.getPath("userData");
    const userSettingsFilePath = path.join(userDataPath, "userSettings.json");
    const recentFilesFilePath = path.join(userDataPath, "recentFiles.json");

    // Load the settings.
    const userSettings: UserSettings = loadUserSettings(
        userDataPath,
        userSettingsFilePath,
    );
    logger.info(
        `User settings has been loaded from <${userSettingsFilePath}>.`,
    );

    // Registers all IPC handlers.
    registerAllIpcHandlers(mainWindow, updater, userSettings, {
        userDataPath,
        userSettingsFilePath,
        recentFilesFilePath,
    });

    // Create tray.
    createTray(mainWindow, updater);

    // Do not create any menu (Linux and Win).
    Menu.setApplicationMenu(null);

    // Show splash screen for 1.5 seconds.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    splash.close();
    mainWindow.show();

    // Handle close events here.
    handleCloseEvents(mainWindow);

    // Check for updates on startup.
    if (app.isPackaged) {
        setTimeout(async () => {
            logger.info("Checking for updates on startup...");
            try {
                const updateResult = await updater.checkForUpdates(false);
                if (updateResult) {
                    logger.info(
                        `Update is available: <${updateResult.isUpdateAvailable}>. Info about update: <{ version: ${updateResult.updateInfo.version}, releaseDate: ${updateResult.updateInfo.releaseDate} }>.`,
                    );
                } else {
                    logger.warn(
                        `Cannot retrieve information if any update is available!`,
                    );
                }
            } catch (error) {
                logger.error(`Error checking for updates: <${error}>!`);
            }
        }, 2000);
    }
});

/**
 * Implements the "minimize to tray/background" behavior. This behavior is used by some other apps such as Discord or Teams.
 * Function also stops and quits the server process.
 * @param mainWindow main window to close
 * @param serverProcess server process or null if there is no server process to stop
 */
function handleCloseEvents(mainWindow: BrowserWindow): void {
    let willClose = false;

    mainWindow.on("close", (e) => {
        if (willClose) {
            logger.info(`Application and server will be closed.\n`);

            return;
        }
        e.preventDefault();
        mainWindow.hide();
        if (app.dock) {
            app.dock.hide();
        }
    });

    app.on("before-quit", () => {
        willClose = true;
    });

    mainWindow.on("show", () => {
        willClose = false;
    });
}
