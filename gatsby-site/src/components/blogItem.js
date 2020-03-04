import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import blogStyles from "./blog.module.css";
import { lang } from "../lang/en_US";
import { getArticleInfoById } from '../articles_config';

const BlogItem = ({ id }) => {
console.info(id)
    const articleData = lang.ARTICLES[`id_${id}`];
    const articleConfig = getArticleInfoById(id);

    const { data, type } = articleConfig;

    return (
        <Link to="/blog_article" state={{id}}>
            <div className={blogStyles.article_preview}>
                <h2>{articleData.name}</h2>
                <p className="article_date"><h3>{data.toUTCString()}</h3></p>
                <p className="article_type"><i>-{lang.ARTICLE_TYPES[type]}-</i></p>
                <p className="article_first_paragraph">{articleData.description}</p>
                <p>READ MORE...</p>
            </div>
        </Link>
    );
};

BlogItem.propTypes = {
    id: PropTypes.number,
};

BlogItem.defaultProps = {
    id: 0,
};

export default BlogItem;
