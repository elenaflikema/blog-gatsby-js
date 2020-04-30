import PropTypes from "prop-types";
import React from "react";

import layoutStyles from "./layout.module.css";

const Header = () => {

    return (
        <div>
            <div className={layoutStyles.toggle_menu} onClick="showMenu()">
                <span className={layoutStyles.toggle_menu_bar}></span>
                <span className={layoutStyles.toggle_menu_bar}></span>
                <span className={layoutStyles.toggle_menu_bar}></span>
            </div>
        </div>
    )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
