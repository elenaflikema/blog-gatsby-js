import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import menuItemStyles from "./menuItem.module.css";

const MenuItem = ({ pageName, pageLink }) => (
    <Link to={pageLink}>
        <h2>
            <div className={menuItemStyles.menuOption}>
                {pageName}
            </div>
        </h2>
    </Link>
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
