import axios from "axios";
import {app} from "./appConfig";

export const makeRequest = (method, api, data, headers) => {
    console.log(data);

    switch (method.toLowerCase()) {
        case "post": {
            return axios.post(api, data, {headers: Object.assign({}, headers, app.config.headers)});
        }
        case "get" : {
            return axios.get(api, {params: data}, {headers: headers})
        }
        default: {

        }
    }
};