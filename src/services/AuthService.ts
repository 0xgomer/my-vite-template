import $api from "../axios";

export default class AuthService {
    static async login(email: string, password: string) {
        return $api.post('/login', {email, password})
    }

    static async registration (username:string, email:string, password:string) {
        return $api.post('/registration', {username, email, password})
    }

    static async logout () {
        return $api.post('/logout')
    }
}