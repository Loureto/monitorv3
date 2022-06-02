import { CookiesAllProps } from "../types/cookies_types";
import nookies from "nookies";

export const CookiesAll = {
  saveAll: ({ accessToken, refreshToken, username, sub }: CookiesAllProps) => {
    const addOneHour = new Date();
    addOneHour.setHours(addOneHour.getHours() + 1);

    nookies.set(undefined, "PICKUP_ACCESS_TOKEN", accessToken, {
      maxAge: addOneHour,
    });
    nookies.set(undefined, "PICKUP_REFRESH_TOKEN", refreshToken);
    nookies.set(undefined, "PICKUP_USERNAME", username);
    nookies.set(undefined, "PICKUP_SUB", sub);
  },
  removeAll: () => {
    nookies.destroy(undefined, "PICKUP_ACCESS_TOKEN");
    nookies.destroy(undefined, "PICKUP_REFRESH_TOKEN");
    nookies.destroy(undefined, "PICKUP_USERNAME");
    nookies.destroy(undefined, "PICKUP_SUB");
  },
};
