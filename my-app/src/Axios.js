import axios from 'axios'

// For Production, Create .env file and put your backend api URL in that, OR use localhost url
export const Axios = axios.create({
    //baseURL : process.env.REACT_APP_BACKEND_URL,
    baseURL : 'https://flipkart-api.vercel.app/',
    withCredentials:true
})