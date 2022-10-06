import axios from 'axios'
import { IBasket } from './models/IBasket'
import { IOrder } from './models/IOrder'
import { IProduct } from './models/IProduct'
import { IUser } from './models/IUser'
import { control } from './util'

const baseURL = 'https://www.jsonbulut.com/json/'
const ref = 'd1becef32825e5c8b0fc1b096230400b'
const config = axios.create({
    baseURL: baseURL,
    params: { ref: ref },
    timeout: 15000,
    //headers: { 'Auth Berer ': '12312m3nb123b123kj12k31' }
})


// User Login
export const login = ( email:string, password: string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: 'no'
    }
    return config.get<IUser>('userLogin.php', { params: sendParams } )
}

// all product
export const allProduct = () => {
    const sendParams = {
        start: 0
    }
    return config.get<IProduct>('product.php', { params: sendParams })
}

// add basket
export const addBasket = ( productId: string ) => {
    const user = control()
    if ( user ) {
        const sendParams = {
            customerId: user.userId,
            productId: productId,
            html: productId
        }
        return config.get<IBasket>('orderForm.php', { params: sendParams })
    }else {
        return null
    }
}

// orders
export const orders = () => {
    const user = control()
    if ( user ) {
        const sendParams = {
            musterilerID: user.userId,
            random: Math.random()
        }
        return config.get<IOrder>('orderList.php', { params: sendParams })
    }else {
        return null
    }
}