import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import blogStyles from "./blog.module.css";
import { lang } from "../lang/en_US";


const BlogItem = ({ id }) => {

    const articleData = lang.ARTICLES[`id_${id}`];

    return (
        <div className={blogStyles.article_preview}>
            <Link to="/blog_article" state={{id}}>
                <div>
                    <h2>{articleData.name}</h2>
                    <p>{articleData.description}</p>
                </div>
            </Link>
        </div>
    );
};

BlogItem.propTypes = {
    id: PropTypes.number,
};

BlogItem.defaultProps = {
    id: 0,
};

export default BlogItem;
