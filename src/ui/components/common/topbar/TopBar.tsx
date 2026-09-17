/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { ReactNode } from "react";

import "./Topbar.css";

interface TopBarProps {
    children?: ReactNode;
    className?: string;
}

export function TopBar(props: TopBarProps) {
    return (
        <header className={`topbar ${props.className}`}>
            {props.children}
        </header>
    );
}
