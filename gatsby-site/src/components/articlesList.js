import React from "react";
import BlogItem from "./blogItem";
import blogStyles from "./blog.module.css";
import { articlesConfig } from '../articles_config';

const ArticlesList = () => {

    const articles = articlesConfig;

    return (
        <div className={blogStyles.articles_list}>
            {
                articles.map(({id}) => {
                    return (<BlogItem key={id} id={id} state={{id}}/>);
                })
            }
        </div>
    );
};

export default ArticlesList;
