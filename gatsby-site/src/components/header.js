import {graphql, Link, useStaticQuery} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faVk, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import layoutStyles from "./layout.module.css";

const Header = () => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              name,
              lastName
            }
          }
        }
    `);

    return (
        <header>
            <Link to="/" >
                <div className={layoutStyles.name}><h1>{data.site.siteMetadata.name}</h1></div>
                <div className={layoutStyles.name}><h1>{data.site.siteMetadata.lastName}</h1></div>
            </Link>
            <div className={layoutStyles.accent}>
                <h3>
                    {data.site.siteMetadata.title}
                </h3>
            </div>
            <div className={layoutStyles.media}>
                <h2>
                    <a className={layoutStyles.media_option}
                       href='https://www.youtube.com/channel/UClLb8f-gTBJQTrULt62v15Q'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                    <a className={layoutStyles.media_option}
                       href='https://www.instagram.com/J_flick_lc/'
                       target="_blank" rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a className={layoutStyles.media_option}
                       href='https://vk.com/joshflickema'
                       target="_blank" rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a className={layoutStyles.media_option}
                       href='https://www.facebook.com/jimmyviking36'
                       target="_blank" rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </h2>
            </div>
            <div className={layoutStyles.border} />
        </header>
    )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
