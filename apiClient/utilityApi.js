import axiosClient from "./axiosClient";

const UtilityApi = {
    searchPoint(params) {
        const url = "/gifs/search/tags";
        return axiosClient.get(url, { params })
    }
}

export default UtilityApi;