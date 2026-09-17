/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { UseColorSchemeValue } from "@mantine/hooks";

export function computeOptimalYellow(colorScheme: UseColorSchemeValue) {
    return colorScheme === "dark" ? "#facc15" : "#c27803";
}
