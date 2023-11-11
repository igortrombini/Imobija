import axios from "axios";

export const urlApi = process.env.REACT_APP_API_URL;

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // headers:{\
  //   'Content-Type': 'application/json'
  // }
});

export default Api;