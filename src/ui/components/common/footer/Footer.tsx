/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type { ReactNode } from "react";

import "./Footer.css";

interface FooterProps {
    children?: ReactNode;
    className?: string;
}

export function Footer(props: FooterProps) {
    return (
        <footer className={`footer ${props.className}`}>
            {props.children}
        </footer>
    );
}
