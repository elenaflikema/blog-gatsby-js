import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductCard = ( id, name ) => {
    return (
        <Layout>
            <SEO title={name} />
            {`id_${id}`}
        </Layout>
    );
};

export default ProductCard;
