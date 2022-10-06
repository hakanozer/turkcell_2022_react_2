import { SearchType } from "../types/SearchType";

export interface ISearchAction {
    type: SearchType,
    payload: string
}

export const SearchReducer = ( state: string = '', action: ISearchAction ) => {
    switch (action.type) {
        case SearchType.SEARCH_CHANGE:
        return action.payload
    
        default:
            return state
    }
}