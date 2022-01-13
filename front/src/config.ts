import axios from "axios";
export const ENDPOINT = "http://localhost:5001";
export const api = axios.create({
  baseURL: ENDPOINT + "/api/v1",
});
