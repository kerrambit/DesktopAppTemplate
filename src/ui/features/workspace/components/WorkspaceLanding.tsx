/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { FileRejection } from "@mantine/dropzone";
import { Anchor, Button, Text } from "@mantine/core";
import { Dropzone } from "../../../components/common/dropzone/Dropzone.tsx";
import { loggerUi } from "../../../services/UiLoggingService.ts";
import { pushWarningNotification } from "../../../services/NotificationService.ts";
import { useRecentFilesStore } from "../../../stores/recentFilesStore.ts";

export default function WorkspaceLanding() {
    // Use recent files.
    const recentFiles = useRecentFilesStore((set) => set.recentFiles);

    // Render the component.
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
        >
            <Dropzone
                onDrop={async () => {}}
                onReject={(rejections: FileRejection[]) => {
                    onRejectHandler(rejections);
                }}
                enableMultipleInputFiles={false}
                allowedExtensions={[]}
            >
                {renderDropzoneButtonsArea(recentFiles)}
            </Dropzone>
        </div>
    );
}

function onRejectHandler(rejections: FileRejection[]) {
    loggerUi.warn(
        `Dropzone rejected these files: <${JSON.stringify(rejections)}>.`,
    );
    pushWarningNotification(`File was rejected!`);
}

function renderDropzoneButtonsArea(recentFiles: string[]) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                paddingTop: "6em",
            }}
        >
            {/* Left column. */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "4em",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75em",
                        width: "250px",
                    }}
                >
                    {/* Header. */}
                    <div style={{ width: "100%" }}>
                        <Text size="lg">Start</Text>
                    </div>

                    {/* First button. */}
                    <div style={{ width: "100%", pointerEvents: "auto" }}>
                        <Button
                            title="Creates new blank project."
                            variant="outline"
                            onClick={() => {
                                loggerUi.info(
                                    "User's action on home page is: <Create new project>.",
                                );
                            }}
                        >
                            Create new project
                        </Button>
                    </div>

                    {/* Second button. */}
                    <div style={{ width: "100%", pointerEvents: "auto" }}>
                        <Button
                            title="Shows file explorer and opens given file in viewer."
                            variant="outline"
                            onClick={() => {
                                loggerUi.info(
                                    "User's action on home page is: <Open file in viewer...>.",
                                );
                            }}
                        >
                            Open file in viewer...
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right column. */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "4em",
                    minWidth: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.5em",
                        width: "100%",
                        maxWidth: "600px",
                    }}
                >
                    {/* Header. */}
                    <div style={{ width: "100%", marginBottom: "0.5em" }}>
                        <Text size="lg">Recent</Text>
                    </div>

                    {/* Render recent files or label that no recent files were found. */}
                    {recentFiles.length === 0 && (
                        <Text size="md" c="dimmed">
                            No recent files...
                        </Text>
                    )}

                    {/* TODO: set the limit in Settings */}
                    {recentFiles.slice(0, 10).map((path, index) => {
                        return (
                            <Anchor
                                title={path}
                                key={index}
                                component="button"
                                truncate="end"
                                size="sm"
                                style={{
                                    display: "block",
                                    textAlign: "left",
                                    width: "100%",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    loggerUi.info(
                                        `Recent file ${path} will be opened`,
                                    );
                                }}
                            >
                                {path}
                            </Anchor>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
