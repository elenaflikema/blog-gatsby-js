import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlesList from "../components/articlesList";

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="My English Blog"/>
            <ArticlesList />
        </Layout>
    );
};

export default BlogPage;
