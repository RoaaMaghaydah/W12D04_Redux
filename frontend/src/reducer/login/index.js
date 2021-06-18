const initialState = {
    token:"",
  };



  const token = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_TODOS':
        return { token : payload };
  
    }};
    export default token;


  export const setToken = (token) => {
    return { type: "SET_TOKEN" ,
     payload : token }
  };
