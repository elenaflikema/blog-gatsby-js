import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import layoutStyles from "./layout.module.css";
import { lang } from "../lang/en_US";

const Layout = ({children}) => {

    return (
        <div className={layoutStyles.background}>
            <Header />
            <main>{children}</main>
            <footer>
                {lang.COPYRIGHTS} © {new Date().getFullYear()}, Joshua Flickema
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
