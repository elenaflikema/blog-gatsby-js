import React from "react";
import menuItemStyles from "./menuItem.module.css";
import layoutStyles from "./layout.module.css";
import {lang} from "../lang/en_US";
import MenuItem from "./menuItem";

const MenuBar = () => (
    <div className={layoutStyles.menu}>
        <MenuItem pageName={lang.MY_BLOG} pageLink={"/blog/"}/>
        <MenuItem pageName={lang.VIDEO_LESSONS} pageLink={"/lessons/"}/>
        <a href="https://wa.me/79319801937?text=Hi%20Josh">
            <h2>
                <div className={menuItemStyles.menuOption}>
                    {lang.CONTACT_ME}
                </div>
            </h2>
        </a>
    </div>
);

export default MenuBar;
