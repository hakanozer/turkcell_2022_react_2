import { Bilgiler } from "./models/IUser";
import * as CryptoJS from 'crypto-js'

export const control = () => {
    // remember control
    const stLocal = localStorage.getItem('user')
    if ( stLocal ) {
        sessionStorage.setItem('user', stLocal)
    }
    const stSession = sessionStorage.getItem('user')
    if ( stSession ) {
        try {
            const plainText = decrypt(stSession)
            const bilgi:Bilgiler = JSON.parse(plainText)
            return bilgi
        } catch (error) {
            sessionStorage.removeItem('user')
            return null;
        }
    }else {
        return null;
    }
}
const secretKey = process.env.REACT_APP_SECRET_KEY ? process.env.REACT_APP_SECRET_KEY : 'keyApp'
export const encrypt = ( plainText:string ) => {
    const cipherText = CryptoJS.AES.encrypt( plainText, secretKey ).toString()
    return cipherText
}

export const decrypt = ( cipherText:string ) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}