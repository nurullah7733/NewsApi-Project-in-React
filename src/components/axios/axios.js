import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_URL,
});

// Alter defaults after instance has been created
instance.defaults.headers.common["X-NEWS-API"] = process.env.REACT_APP_NEWS_API;

export default instance;
