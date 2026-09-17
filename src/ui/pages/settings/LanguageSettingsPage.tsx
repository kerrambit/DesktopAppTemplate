/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { BaseSettings } from "../../features/settings/components/BaseSettings";
import { LanguageSettingsForm } from "../../features/settings/components/LanguageSettingsForm";

export default function LanguageSettingsPage() {
    return (
        <BaseSettings>
            <LanguageSettingsForm />
        </BaseSettings>
    );
}
