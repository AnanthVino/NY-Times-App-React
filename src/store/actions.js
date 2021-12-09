export const getTopStoriesData = (news) => ({
    type: 'TOP_STORIES',
    payload : news
});

export const getSearchStoriesData = (news) => ({
    type: 'SEARCH_ARTICLES',
    payload : news
});

export const getReaderCommentsData = (comments) => ({
    type: 'ARTICLE_COMMENTS',
    payload : comments
});

export const getLoginToken = (token) => ({
    type: 'GET_TOKEN',
    payload : token
});

export const getSearchArticleValue = (value) => ({
    type: 'TYPE_ARTICLE_VALUE',
    payload: value
})