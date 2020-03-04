import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainPage from "../components/mainPage";
import MenuBar from "../components/MenuBar";
import {lang} from "../lang/en_US";
import mainPageStyles from "../components/mainPage.module.css";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className={mainPageStyles.info_block}>
            <p>{lang.INTRO_BLOCK_1}</p>
            <p>{lang.INTRO_BLOCK_2}</p>
        </div>
        <div className={mainPageStyles.text}>
            <h1>Let's study English!</h1>
        </div>
        <MenuBar />
        <MainPage />
    </Layout>
);

export default IndexPage;
