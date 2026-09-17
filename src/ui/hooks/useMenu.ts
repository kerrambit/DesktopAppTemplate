/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { useContext } from "react";
import { MenuContext } from "../providers/MenuContext";

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("Menu must be used within MenuProvider");
    }
    return context;
}
