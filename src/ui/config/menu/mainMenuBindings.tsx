/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { router } from "../../router/router";
import { pushErrorNotification } from "../../services/NotificationService";
import { AboutDialogueContent } from "../../features/about-dialogue/components/AboutDialogueContent";
import { useDialogueStore } from "../../stores/dialogueStore";
import { IconFileFilled } from "@tabler/icons-react";
import { useRecentFilesStore } from "../../stores/recentFilesStore";
import {
    createAboutMenuItem,
    createAboutSection,
    createExitMenuItem,
    createExitSection,
    createFileRootMenuItem,
    createHelpRootMenuItem,
    createOnlyDevSection,
    createOpenDevToolsMenuItem,
} from "./systemMenuItems";
import {
    createProjectActionsSection,
    createCreateNewProjectMenuItem,
    createFileImportSection,
    createOpenFileInViewerMenuItem,
    createOpenRecentFileInViewerMenuItem,
    createUtilitiesSection,
    createOpenUserDataFolderMenuItem,
} from "./fileMenuItems";
import {
    createHomePageSection,
    createHomePageMenuItem,
    createCheckForUpdatesSection,
    createCheckForUpdatesMenuItem,
} from "./helpMenuItems";
import { createSettingsRootMenuItem } from "./settingsRootMenuItem";
import type {
    Menu,
    LiveMenuRenderProps,
    Dropdown,
} from "../../providers/MenuContext";

export function bindMainMenu(): Menu {
    return [
        createFileRootMenuItem([
            createProjectActionsSection([
                createCreateNewProjectMenuItem(
                    ({ render }: LiveMenuRenderProps) => {
                        return render({
                            action: () => {
                                console.log("new project");
                            },
                            type: "direct",
                        });
                    },
                ),
            ]),
            createFileImportSection([
                createOpenFileInViewerMenuItem(
                    ({ render }: LiveMenuRenderProps) => {
                        return render({
                            action: async () => {
                                console.log("open file project");
                            },
                            type: "secondary",
                        });
                    },
                ),
                createOpenRecentFileInViewerMenuItem(
                    ({ render }: LiveMenuRenderProps) => {
                        const recentFiles =
                            useRecentFilesStore.getState().recentFiles;
                        if (recentFiles.length === 0) return null;

                        const liveDropdownTask: Dropdown = [
                            {
                                id: "recent-files-sub-list",
                                items: recentFiles.map((path) => ({
                                    id: `recent-file-${path}`,
                                    icon: {
                                        icon: IconFileFilled,
                                        position: "left",
                                    },
                                    title: path,
                                    task: {
                                        type: "direct",
                                        action: () => {
                                            console.log("recent file");
                                        },
                                    },
                                })),
                            },
                        ];

                        return render(liveDropdownTask);
                    },
                ),
            ]),
            createUtilitiesSection([
                createOpenUserDataFolderMenuItem(async () => {
                    const result =
                        await window.electron.requestToOpenUserDataFolder();
                    if (result instanceof Error) {
                        pushErrorNotification(
                            `Not able to open user data folder! Details: <${result.message}>.`,
                        );
                    }
                }),
            ]),
            createOnlyDevSection("file-dev", "For developers", [
                createOpenDevToolsMenuItem(),
            ]),
            createExitSection([createExitMenuItem()]),
        ]),
        createSettingsRootMenuItem(() => {
            router.navigate("/settings");
        }),
        createHelpRootMenuItem([
            createHomePageSection([
                createHomePageMenuItem(() => {
                    router.navigate("/home");
                }),
            ]),
            createCheckForUpdatesSection([createCheckForUpdatesMenuItem()]),
            createAboutSection([
                createAboutMenuItem(async () => {
                    await useDialogueStore.getState().showDialogue({
                        title: "About",
                        showCloseButton: true,
                        content: (close) => (
                            <AboutDialogueContent close={close} />
                        ),
                    });
                }),
            ]),
        ]),
    ];
}
