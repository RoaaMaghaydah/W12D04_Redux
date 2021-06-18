import {createStore, combineReducers} from 'redux'

// import reducers
import token from './login/index'
import articles from './article/index'

// import login from './login'


const reducers = combineReducers({token,  articles})

const store= createStore(reducers)

export default store

