import React from 'react';
import PropTypes from "prop-types";

import Header from "./header";

import layoutStyles from "./layout.module.css";
import { lang } from "../lang/en_US";

const Layout = ({children}) => {

    return (
        <main className={layoutStyles.container}>
            <nav className={layoutStyles.nav_bar}>
                <div className={layoutStyles.brand_name}><strong>{'ПРИЮТ ВЕЩЕЙ'}</strong></div>
                <Header />
            </nav>
            <section className={layoutStyles.main_section}>
                {children}
            </section>
        </main>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
