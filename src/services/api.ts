import { useContext } from "react";
import { AuthContext } from "@contexts/authContext";
import { CookiesAll } from "@utils/cookiesAll";
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "api-key": "7055420794",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { PICKUP_REFRESH_TOKEN: refreshToken } = parseCookies();
    const { signOut } = useContext(AuthContext);

    if (error.response.status === 401) {
      if (error.response.status === 401 && refreshToken) {
        api
          .post("/auth/refresh", {
            refreshToken,
          })
          .then((response) => {
            const { accessToken, refreshToken } = response.data;

            CookiesAll.saveAll({ accessToken, refreshToken });

            api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
          });
      } else {
        signOut;
      }
    } else if (error.response.status === 500) {
      signOut;
    }

    return Promise.reject(error);
  }
);

api.interceptors.request.use((config) => {
  const { PICKUP_ACCESS_TOKEN: nextToken } = parseCookies();

  if (nextToken) {
    config.headers.Authorization = `Bearer ${nextToken}`;
  }

  return config;
});
