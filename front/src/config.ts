import axios from "axios";
export const ENDPOINT = "http://localhost:5001";

export const api = axios.create({
  baseURL: ENDPOINT + "/api/v1",
});

export let securedApi;
export const setAxiosToken = (token: string) => {
  securedApi = axios.create({
    baseURL: ENDPOINT + "/api/v1",
    headers: {
      Authorization: token,
    },
  });
};
