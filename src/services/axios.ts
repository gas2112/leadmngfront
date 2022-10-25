import axios from "axios";
import { parseCookies } from "nookies";



export function getAPIClient(ctx?: any) {
  const { 'ldmng.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://localhost:9001/api/',
  })

  api.interceptors.request.use(config => {
    // console.log(config);
    return config;
  })

  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
  }

  return api;
}