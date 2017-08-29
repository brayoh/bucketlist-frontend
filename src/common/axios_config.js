import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://awesome-bucketlist-api.herokuapp.com/api/v1/',
  baseURL: 'http://127.0.0.1:5000/api/v1/',
  timeout: 10000,
  headers: new Headers({'Content-Type': 'application/json'})
});

export default instance;