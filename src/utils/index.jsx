import axios from "axios";

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
    baseURL: productionUrl,
})
// customFetch is an Axios instance created with the baseURL set to productionUrl. 
//This means that any requests made with customFetch will have this base URL automatically prefixed to their URLs

