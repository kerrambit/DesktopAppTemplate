/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface DeleteActionIconProps {
    tooltip?: string;
    enabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export function DeleteActionIcon(props: DeleteActionIconProps) {
    const enabled = props.enabled ?? true;

    // Render the component.
    return (
        <ActionIcon
            component="div"
            disabled={!enabled}
            variant="subtle"
            color="red"
            onClick={enabled ? props.onClick : undefined}
            title={props.tooltip}
        >
            <IconTrash size={18} color={enabled ? "red" : "grey"} />
        </ActionIcon>
    );
}
