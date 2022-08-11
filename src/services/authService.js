// import http from "./httpService";
import jwtDecode from "jwt-decode";
import axios from "axios";

const authEndpoint = "https://scoopadm.apps-foundry.com/scoopcor/api/v1/auth/login";
const tokenKey = "token";

const login = (username, password) => {
    return axios.post(authEndpoint, {
            username,
            password,
        },
        {
            headers: {
                "Accept": "application/vnd.scoop.v3+json",
                "Accept-Language": "id-ID",
                "X-Scoop-Client": "Scoop Portal/3.0",
                "X-User-Agent": "epp-portal / web 1.0.0"
            }
        })
        .then((res) => {
           if (res.data.accessToken) {
            sessionStorage.setItem(tokenKey, JSON.stringify(res.data));
           }

           return res.data
        });
};

export function getToken() {
    return sessionStorage.getItem(tokenKey);
};

export function getCurrentUser() {
    try {
        const token = sessionStorage.getItem(tokenKey);
        return jwtDecode(token);
    } catch (e) {
        return null;
    }
}

const authService = {
    login,
    getToken,
    getCurrentUser,
};

export default authService;