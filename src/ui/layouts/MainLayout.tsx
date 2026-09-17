/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

import { Outlet } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { MainMenuBridge } from "./menu-bridges/MainMenuBridge";

import "./Layout.css";

export function MainLayout() {
    return (
        <MainMenuBridge>
            <div className={"layout"}>
                <div className="layout__header">
                    <Header />
                </div>
                <div className="layout__content">
                    <Outlet />
                </div>
                <div className="layout__footer">
                    <Footer></Footer>
                </div>
            </div>
        </MainMenuBridge>
    );
}

export default MainLayout;
