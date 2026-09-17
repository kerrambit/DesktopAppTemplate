/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { BaseSettings } from "../../features/settings/components/BaseSettings";
import { UiSettingsForm } from "../../features/settings/components/UiSettingsForm";

export default function UiSettingsPage() {
    return (
        <BaseSettings>
            <UiSettingsForm />
        </BaseSettings>
    );
}
