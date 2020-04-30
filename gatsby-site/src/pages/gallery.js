import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/productList";

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="My English Blog"/>
            <ProductList />
        </Layout>
    );
};

export default BlogPage;
