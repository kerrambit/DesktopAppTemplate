/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { createContext } from "react";

type UserSettingsContextType = {
    settings: UserSettings;
    setSettings: React.Dispatch<React.SetStateAction<UserSettings>>;
};

export const UserSettingsContext =
    createContext<UserSettingsContextType | null>(null);
