const INIT_STATE = {}
const News = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'TOP_STORIES':
            return { 
                ...state,
                top_stories : action.payload
            };
        
        case 'SEARCH_ARTICLES':
            return { 
                ...state,
                search_stories : action.payload
            };
                
        case 'ARTICLE_COMMENTS':
            return { 
                ...state,
                comments : action.payload 
            };
        
        case 'GET_TOKEN':
            return { 
                ...state,
                access_token : action.payload 
            };
        
        case 'TYPE_ARTICLE_VALUE':
            return { 
                ...state,
                search_article : action.payload
            };
            
        default: return { ...state };
    }
}

export default News;