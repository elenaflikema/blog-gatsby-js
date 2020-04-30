import React from "react";
import {lang} from "../lang/en_US";
import MenuItem from "./menuItem";

import layoutStyle from './layout.module.css';

const MainPage = () => {

    return (
        <>
            <h2 className={layoutStyle.subtitle}>{'Добро пожаловать в наш приют!'}</h2>
            <p><strong>{lang.INTRO_BLOCK_1}</strong></p>
            <p><strong>{lang.INTRO_BLOCK_2}</strong></p>
            <MenuItem pageName={lang.GALLERY} pageLink={"/gallery/"}/>
        </>
    );
};

export default MainPage;
