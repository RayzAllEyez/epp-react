import axios from "axios";

const eppAxios = axios.create({
    baseURL: process.env.React_APP_EPP,
});

const exportedObject = {
    get: eppAxios.get,
    post: eppAxios.post,
    put: eppAxios.put,
    delete: eppAxios.delete,
    patch: eppAxios.patch
}

export default exportedObject;