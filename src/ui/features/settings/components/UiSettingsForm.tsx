/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { Divider, Text } from "@mantine/core";
import { SchemeSelector } from "./SchemeSelector";
import { ThemeSelector } from "./ThemeSelector";

export function UiSettingsForm() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
            }}
        >
            <Text component="label" fw={600} size="sm">
                Select the light/dark mode:
            </Text>
            <div style={{ maxWidth: "20%" }}>
                <SchemeSelector />
            </div>

            <Divider my="sm" />

            <Text component="label" fw={600} size="sm">
                Select the theme:
            </Text>
            <div style={{ maxWidth: "75%" }}>
                <ThemeSelector />
            </div>
        </div>
    );
}
