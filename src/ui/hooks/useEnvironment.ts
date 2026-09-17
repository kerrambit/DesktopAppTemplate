/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { useState } from "react";

export function useEnvironment() {
    const [env] = useState<Environment>(window.electron.requestEnvironment());

    return env;
}
