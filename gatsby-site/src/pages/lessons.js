import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MenuBar from "../components/MenuBar";

const LessonsPage = () => {

    return (
        <Layout>
            <SEO title="English Video Lessons"/>
            <MenuBar />
            <h1>English Lessons</h1>
        </Layout>
    );
};

export default LessonsPage;
