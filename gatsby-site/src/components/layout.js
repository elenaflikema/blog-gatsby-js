import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import MenuItem from "./menuItem";

import layoutStyles from "./layout.module.css";
import { lang } from "../lang/en_US";
import menuItemStyles from "./menuItem.module.css";

const Layout = ({ children }) => {

    return (
        <div className={layoutStyles.background}>
            <Header />
            <p>{lang.INTRO_BLOCK_1}</p>
            <p>{lang.INTRO_BLOCK_2}</p>

            <div className={layoutStyles.menu}>
                <a href="https://wa.me/79319801937?text=Hi%20Josh">
                    <h2 className={layoutStyles.name}>
                        <div className={menuItemStyles.menuOption}>
                            {lang.CONTACT_ME}
                        </div>
                    </h2>
                </a>
                <MenuItem pageName={lang.MY_BLOG} pageLink={"/blog/"}/>
                <MenuItem pageName={lang.VIDEO_LESSONS} pageLink={"/lessons/"}/>
            </div>

            <main>{children}</main>

            <footer>
                {lang.COPYRIGHTS} © {new Date().getFullYear()}, Joshua Flickema
            </footer>
        </div>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
