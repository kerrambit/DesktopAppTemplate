/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { MenuProvider } from "../../providers/MenuProvider";
import { bindMainMenu } from "../../config/menu/mainMenuBindings";

interface MainMenuBridgeProps {
    children: React.ReactNode;
}

export function MainMenuBridge({ children }: MainMenuBridgeProps) {
    return (
        <MenuProvider initialMenu={() => bindMainMenu()}>
            {children}
        </MenuProvider>
    );
}
