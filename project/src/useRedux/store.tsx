import { combineReducers, createStore } from "redux";
import { OrderReducer } from './reducers/OrderReducer'

const combine = combineReducers({
    OrderReducer
}) 

export type StateType = ReturnType<typeof combine>

export const store = createStore(combine) 