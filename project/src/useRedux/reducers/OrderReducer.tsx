import { OrderList } from '../../models/IOrder'
import { OrderType } from '../types/OrderType'

export interface IOrderAction {
    type: OrderType,
    payload: OrderList[]
}
export const OrderReducer = (state:OrderList[] = [], action: IOrderAction ) => {
    switch (action.type) {
        case OrderType.ORDER_ADD:
           return action.payload
        
        case OrderType.ORDER_LIST:
            return action.payload
    
        default:
            return state;
    }
}