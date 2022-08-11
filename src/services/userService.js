import { getToken } from "./authService";

const getAuthHeader = () => {
    return {
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    };
}

export default getAuthHeader;