import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogArticle = ( id ) => {

    console.info(id);

    let name = `id_${id}`;

    return (
        <Layout>
            <SEO title="My English Blog"/>
            <h1>Blog</h1>
            <p>Welcome to my Blog</p>
            {name}
        </Layout>
    );
};

export default BlogArticle;
