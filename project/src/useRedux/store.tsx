import { combineReducers, createStore } from "redux";
import { OrderReducer } from './reducers/OrderReducer'
import { SearchReducer } from './reducers/SearchReducer'

const combine = combineReducers({
    OrderReducer, SearchReducer
}) 

export type StateType = ReturnType<typeof combine>

export const store = createStore(combine) 