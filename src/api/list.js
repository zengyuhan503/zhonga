import axios from "axios";

const get = async (url, params = null) => {

    return new Promise((resolve, reject) => {
        let args = { ...params }
        let local = localStorage.getItem('zhong-lang');

        if (local == '' || local == null) {
            localStorage.setItem('zhong-lang', 'zh');
            local = 'zh-cn';
        }
        let lang = local == 'ar' ? 'ar' : 'zh-cn';
        args.lang = lang;
        console.log(args)
        axios.get(url, { params: args })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    })
};

export const bannerApi = () => get('/addons/ldcms/api.v1/ad?name=banner');
export const menu = () => get('/addons/ldcms/api.v1/nav');
export const news = {
    top: (cid) => get(`/addons/ldcms/api.v1/lists?cid=${cid}&page=1&limit=20&last_page=1&flag=top`),
    no_top_list: (params) => get(`/addons/ldcms/api.v1/not_top?cid=${params.cid}&page=${params.page}&limit=${params.limit}&last_page=1`),
}
export const category = (pid) => get(`/addons/ldcms/api.v1/category?pid=${pid}`);

export const listApi = (params) => {
    // https://ccctcorg.cn/addons/ldcms/api.v1/lists?cid=143&page=1&limit=20&last_page=1
    return get(`/addons/ldcms/api.v1/lists?cid=${params.cid}&page=${params.page}&limit=${params.limit}&last_page=1`)
}
export const pagedetailApi = (id) => {
    return get(`/addons/ldcms/api.v1/detail?id=${id}`)
}
export const up_down_list = (id) => {
    return get(`/addons/ldcms/api.v1/up_down_list?id=${id}`)
}
export const pagecontent = (cid) => {
    return get(`/addons/ldcms/api.v1/content?cid=${cid}`)
}

export const original = {
    top: (cid) => get(`/addons/ldcms/api.v1/lists?cid=${cid}&page=1&limit=3&last_page=1&flag=top`),
    no_top_list: (params) => get(`/addons/ldcms/api.v1/not_top?cid=${params.cid}&page=${params.page}&limit=${params.limit}&last_page=1`),
}
// https://ccctcorg.cn/addons/ldcms/api.v1/content?cid=181