import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import menuItemStyles from "./menuItem.module.css";

const MenuItem = ({ pageName, pageLink }) => (
    <div className={menuItemStyles.menuOption}>
        <Link to={pageLink}>{pageName}</Link>
    </div>
);

MenuItem.propTypes = {
    pageName: PropTypes.string,
    pageLink: PropTypes.string,
};

MenuItem.defaultProps = {
    pageName: ``,
    pageLink: '/'
};

export default MenuItem;
