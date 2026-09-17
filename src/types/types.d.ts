/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

/**
 * Helper type to make payloads optional if they are typed as 'void'.
 */
type Args<T> = T extends void ? [] : [payload: T];

/**
 * Unsubscribe function.
 */
type UnsubscribeFunction = () => void;

/**
 * Unified single source of truth for all IPC channels.
 * Defines the parameters, expected return values, and communication behavior.
 */
type IpcApiChannelMap = {
    requestUserSettings: { args: []; reply: UserSettings; type: "sync" };

    requestBuildInformation: {
        args: [];
        reply: BuildInformation;
        type: "sync";
    };

    requestApplicationExit: { args: []; reply: void; type: "invoke" };

    requestToOpenDevTools: { args: []; reply: void; type: "send" };

    requestEnvironment: { args: []; reply: Environment; type: "sync" };

    requestToOpenUserDataFolder: {
        args: [];
        reply: void | Error;
        type: "invoke";
    };

    getRecentFiles: { args: []; reply: string[]; type: "sync" };

    openFileExplorer: {
        args: [multiSelections: boolean, filters: FileFilter[]];
        reply: FileData[] | Error;
        type: "invoke";
    };

    getFileData: {
        args: [paths: string[]];
        reply: FileData[] | Error;
        type: "invoke";
    };

    saveData: {
        args: [data: ArrayBuffer, path: string];
        reply: void | Error;
        type: "invoke";
    };

    saveTemporaryData: {
        args: [data: ArrayBuffer, path: string];
        reply: void | Error;
        type: "invoke";
    };

    requestToOpenExternal: { args: [url: string]; reply: void; type: "send" };

    changeUserSettings: {
        args: [settings: UserSettings];
        reply: void;
        type: "send";
    };

    addRecentFile: { args: [path: string]; reply: void; type: "send" };

    checkForUpdates: {
        args: [];
        reply: {
            version: string;
            releaseDate: string;
        } | null;
        type: "invoke";
    };
};

/**
 * Automatically builds the Window["electron"] method signatures directly from `IpcApiChannelMap` configuration.
 */
type DeriveElectronApi<
    T extends Record<
        string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { args: any[]; reply: any; type: "invoke" | "sync" | "send" }
    >,
> = {
    [K in keyof T]: T[K]["type"] extends "invoke"
        ? (...args: T[K]["args"]) => Promise<T[K]["reply"]>
        : T[K]["type"] extends "sync"
        ? (...args: T[K]["args"]) => T[K]["reply"]
        : (...args: T[K]["args"]) => void;
};

/**
 * Interface `Window`.
 */
interface Window {
    electron: DeriveElectronApi<IpcApiChannelMap>;
}

type FileFilter = {
    name: string;
    extensions: string[];
};

type Environment = {
    isDev: boolean;
    userDataPath: string;
};

interface FileData {
    /**
     * The whole complete file path, e.g. "/home/user/data/tmp/data.text".
     */
    path: string;
    /**
     * Extension without dot, e.g. "txt".
     */
    extension: string;
    /**
     * Name of the file with extension "data.txt".
     */
    name: string;
    /**
     * Flag if the file is binary or not.
     */
    binary: boolean;
    /**
     * Content of the file.
     */
    content: string | Uint8Array<ArrayBuffer>;
}

interface SaveDataPackage {
    data: ArrayBuffer;
    path: string;
}

type Language = "en" | "de";

type UserSettings = {
    lang: Language;
    colorScheme: "light" | "dark";
    colorTheme:
        | "ocean"
        | "forest"
        | "sunset"
        | "royal"
        | "crimson"
        | "golden"
        | "teal"
        | "lavender"
        | "charcoal"
        | "sky"
        | "emerald"
        | "amber";
};

type TranslateFunction = TFunction<"translation", undefined>;

interface BuildInformation {
    app: string;
    appVersion: string;
    commit: string;
    buildDate: string;
    electron: string;
    chrome: string;
    node: string;
    platform: string;
    arch: string;
    osRelease: string;
    zustandVersion: string;
}
