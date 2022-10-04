import { Bilgiler } from "./models/IUser";

export const control = () => {
    const stSession = sessionStorage.getItem('user')
    if ( stSession ) {
        try {
            const bilgi:Bilgiler = JSON.parse(stSession)
            return bilgi
        } catch (error) {
            sessionStorage.removeItem('user')
            return null;
        }
    }else {
        return null;
    }
}