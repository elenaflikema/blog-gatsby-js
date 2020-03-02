import React from "react";
import BlogItem from "./blogItem";
import blogStyles from "./blog.module.css";

const ArticlesList = () => {

    const articleIds = [1, 2, 3, 4];

    return (
        <div className={blogStyles.articles_list}>
            {
                articleIds.map((id) => {
                    return (<BlogItem key={id} id={id} state={{id}}/>);
                })
            }
        </div>
    );
};

export default ArticlesList;
