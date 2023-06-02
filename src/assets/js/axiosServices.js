import axios from 'axios';

const oApiClient = axios.create({
    baseURL: `${window.location.hostname}/api`
})

const oConfigBase = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store',
    }
}

oApiClient.interceptors.response.use(response => {
    return response
  }, (error) => {
    return error.response
})

oApiClient.interceptors.request.use(config => {
    config.baseURL = `/api`
    return config
})


export default {
    onAxiosGet(sUrl) {
        delete oConfigBase.responseType
        return oApiClient.get(sUrl, oConfigBase);
    },
    onAxiosPost(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.post(sUrl, oBody, oConfigBase);
    },
    onAxiosPut(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.put(sUrl, oBody, oConfigBase);
    },
    onAxiosDelete(sUrl, oBody) {
        delete oConfigBase.responseType
        return oApiClient.delete(sUrl, oBody, oConfigBase);
    },
    onAxiosPostLogin(sUrl, oBody) {
        oConfigBase.headers.Authorization = '';
        delete oConfigBase.responseType
        return oApiClient.post(sUrl, oBody, oConfigBase);
    },

    async onAxiosPostWithfile(sUrl, oBody) {
        delete oConfigBase.responseType;
        oConfigBase.headers['Content-Type'] = 'multipart/form-data'; 
        return oApiClient.post(sUrl, oBody, oConfigBase)
    },
    

    async onAxiosGetToFile(sUrl) {
        oConfigBase.responseType = "blob";
        return oApiClient.get(sUrl, oConfigBase);
    },
    async onAxiosPostToFile(sUrl, oBody) {
        oConfigBase.responseType = "blob";
        return oApiClient.post(sUrl, oBody, oConfigBase);
    }
}







