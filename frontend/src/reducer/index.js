import {createStore, combineReducers} from 'redux'

// import reducers
import login from './login/index'
import articles from './article/index'

// import login from './login'


const reducers = combineReducers({login,  articles})

const store= createStore(reducers)

export default store

