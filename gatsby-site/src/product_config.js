import {ARTICLE_TYPES} from "./utils";

export const productConfig = [
    {
        id: 0,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
    {
        id: 1,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
    {
        id: 2,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
    {
        id: 3,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
    {
        id: 4,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
    {
        id: 5,
        type: ARTICLE_TYPES.MEMORIES,
        data: new Date()
    },
];

export function getArticleInfoById(id) {
    return productConfig.find((article) => id === article.id);
}