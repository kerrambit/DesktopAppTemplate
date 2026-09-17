/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { Navigate, type RouteObject } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage.tsx";
import SettingsPage from "../pages/settings/SettingsPage.tsx";
import { BackNavigationLayout } from "../layouts/BackNavigationLayout.tsx";
import UiSettingsPage from "../pages/settings/UiSettingsPage.tsx";
import LanguageSettingsPage from "../pages/settings/LanguageSettingsPage.tsx";
import { MainLayout } from "../layouts/MainLayout.tsx";
import { ErrorPage } from "../pages/error-page/ErrorPage.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [{ path: "home", Component: HomePage }],
    },

    {
        path: "/settings",
        Component: BackNavigationLayout,
        errorElement: <ErrorPage />,
        children: [
            { index: true, Component: SettingsPage },
            {
                path: "general",
                children: [
                    { path: "language", Component: LanguageSettingsPage },
                    { path: "ui", Component: UiSettingsPage },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export default routes;
