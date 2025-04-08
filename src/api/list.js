import axios from "axios";

const get = async (url, params = null) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
};

export const banner = () => get('/addons/ldcms/api.v1/ad?name=banner');
export const menu = () => get('/addons/ldcms/api.v1/nav');