import axios from 'axios'
import { IUser } from './models/IUser'

// userLogin.php?userPass=12345&face=no
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

