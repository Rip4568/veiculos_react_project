import axios from "axios";

const getCookie = (name) => {
    const cookieName = document.cookie.split(';')
    .map((cookie) => cookie.trim())
    .filter((cookie) => cookie.startsWith(name + '='));

    if (cookieName) {
        return cookieName;
    }

    return "NotFound"
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        /* 'X-CSRFTOKEN': getCookie('csrftoken') */
    }
})

export default instance;