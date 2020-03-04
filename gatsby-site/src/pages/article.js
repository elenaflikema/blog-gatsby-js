import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuBar from "../components/menuBar";

const BlogArticle = ( id ) => {

    console.info(id);

    let name = `id_${id}`;

    return (
        <Layout>
            <SEO title="My English Blog"/>
            <MenuBar/>
            {name}
        </Layout>
    );
};

export default BlogArticle;
