const initialState = {
    articles:[],
  };


  const articles = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_ARTICLES':
        return { articles: [...payload] };
  
      case 'ADD_ARTICLE':
        return { articles: [...state.articles, payload] };
     
      case 'UPDATE_ARTICLE':
        return {
            articles: state.articles.map((elem, i) => {
            if (elem._id === payload) {
              return payload;
            }
            return elem;
          }),
        };
  
      case 'DELETE_ARTICLE':
        return state.articles .filter((elem) => { return elem._id !== payload});
  
      default:
        return state;
    }
  };
  
  export default articles;
  
  // ACTIONS
  export const setArticles = (articles) => {
    return {type: "SET_ARTICLES",
     payload: articles}
  };
  
  export const createArticles = (newArtical) => {
    return {type: "ADD_ARTICLE",
     payload: newArtical}
  };
  
  export const updateArticles = (updatedArtical) => {
    return {type: "UPDATE_ARTICLE",
     payload: updatedArtical
  };}
  
  export const deleteArticles = (deletedArticalId) => {
    return {type: "DELETE_ARTICLE",
    payload: deletedArticalId}
  };
  