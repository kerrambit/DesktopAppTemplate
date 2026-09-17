/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { RouterLocationBreadcrumbs } from "../../../components/common/router-location-breadcrumbs/RouterLocationBreadcrumbs";

export function SettingsRouterBreadcrumbs() {
    // Synonyms.
    const wordsToFix = [{ location: "ui", synonym: "UI" }];

    // Render the component.
    return <RouterLocationBreadcrumbs locationSynonyms={wordsToFix} />;
}
