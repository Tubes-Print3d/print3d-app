import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;

export default axios.create({
  baseURL: `${PROXY}/api`,
});
