import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import productStyles from "./product.module.css";
import { lang } from "../lang/en_US";
import { getArticleInfoById } from '../product_config';

const ProductCard = ({ id }) => {

    const articleData = lang.ARTICLES[`id_${id}`];
    const articleConfig = getArticleInfoById(id);

    const { data } = articleConfig;

    return (
        <Link to="/blog_article" state={{id}}>
            <div className={productStyles.article_preview}>
                <h2>Меня зовут {articleData.name}</h2>
                <p><h3>Я живу здесь с {data.toUTCString()}</h3></p>
                <p className="article_first_paragraph">{articleData.description}</p>
                <p><h3>Узнай мою историю...</h3></p>
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number,
};

ProductCard.defaultProps = {
    id: 0,
};

export default ProductCard;
