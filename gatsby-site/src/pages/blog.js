import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlesList from "../components/articlesList";
import MenuBar from "../components/menuBar";

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="My English Blog"/>
            <MenuBar />
            <ArticlesList />
        </Layout>
    );
};

export default BlogPage;
