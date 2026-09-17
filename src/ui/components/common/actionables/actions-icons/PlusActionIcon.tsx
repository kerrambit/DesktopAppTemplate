/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useAppearance } from "../../../../hooks/useAppearance";

interface PlusActionIconProps {
    tooltip?: string;
    enabled?: boolean;
    onClick: () => void;
}

export function PlusActionIcon(props: PlusActionIconProps) {
    // Use apperance.
    const { colorScheme } = useAppearance();

    // Choose optimal color based on color scheme.
    const optimalColor =
        colorScheme === "dark" ? "var(--color-light)" : "var(--color-dark)";

    // Render the component.
    return (
        <ActionIcon
            disabled={props.enabled ?? false}
            color={optimalColor}
            variant="subtle"
            onClick={props.onClick}
            title={props.tooltip}
        >
            <IconPlus size={18} />
        </ActionIcon>
    );
}
