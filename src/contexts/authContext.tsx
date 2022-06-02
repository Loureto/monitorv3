import { createContext, useState } from "react";
import { api } from "@services/api";
import { CookiesAll } from "@utils/cookiesAll";
import {
  AuthContextData,
  AuthProviderProps,
  SignInCredentials,
  User,
} from "src/types/auth_types";
import Router from "next/router";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>();
  const isAuthenticated = !!user;

  async function signIn({ username, password }: SignInCredentials) {
    setLoading(true);
    try {
      const response = await api.post("/asm/v1/auth/token", {
        username,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      let decoded = {} as any;

      decoded = await jwt_decode(accessToken);

      const sub = decoded.sub;

      CookiesAll.saveAll({ accessToken, refreshToken, username, sub });

      setUser({ user: username });

      Router.push("/dashboard");
    } catch (error) {
      setLoading(false);

      return error.data;
    }
    setLoading(false);
  }

  function signOut() {
    CookiesAll.removeAll();
    Router.replace("/");
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
