import { browser } from "$app/environment"
export function auth() {
    if(browser){
        const token = localStorage.getItem('token')
    if(token == null){
        localStorage.clear()
        window.location.href = '/'
    }
    }
}