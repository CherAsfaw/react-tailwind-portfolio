import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api"
  baseURL: "http://portfolio.be.cherasfaw.com//api"
})
export default axiosBase