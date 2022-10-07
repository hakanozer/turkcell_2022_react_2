import { createContext } from "react"

export interface IUserContext {
    title: string,
    color: string
}

const dataContext: IUserContext = {
    title: "App Title",
    color: '#000000'
}

export const objContext = {
    data: dataContext,
    setData: ( (item: IUserContext) => objContext.data = item )
}

export const UserContext = createContext(objContext)

