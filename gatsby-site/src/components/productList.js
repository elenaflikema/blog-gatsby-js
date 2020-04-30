import React from "react";
import ProductCard from "./productCard";
import productStyles from "./product.module.css";
import { productConfig } from '../product_config';

const ProductList = () => {

    return (
        <>
            <h2 className={productStyles.title}>{'-ГАЛЕРЕЯ-'}</h2>
            <div className={productStyles.articles_list}>
                {
                    productConfig.map(({id}) => {
                        return (<ProductCard key={id} id={id} state={{id}}/>);
                    })
                }
            </div>
        </>
    );
};

export default ProductList;
