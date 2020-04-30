import layoutStyles from "./layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const MediaItem = ({}) => (
    <a className={layoutStyles.media_option}
       href='https://www.instagram.com/home_for_things/'
       target="_blank" rel="noopener noreferrer"
    >
        <FontAwesomeIcon icon={faInstagram}/>
    </a>
);

export default MediaItem;