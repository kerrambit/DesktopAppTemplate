/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import type React from "react";

import "./PreformattedText.css";

type PreformattedTextProps = React.PropsWithChildren;

export function PreformattedText(props: PreformattedTextProps) {
    return <pre className="preformatted-text">{props.children}</pre>;
}
