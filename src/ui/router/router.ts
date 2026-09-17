/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { createMemoryRouter } from "react-router-dom";
import routes from "./routes";
import { loggerUi } from "../services/UiLoggingService";

export const router = createMemoryRouter(routes);

// Subscribe to the change of route and log the page change.
router.subscribe((state) => {
    loggerUi.info(`Current page set to: <${state.location.pathname}>.`);
});
