import { ReactNode } from "react"

export type SignInCredentials = {
    username: string
    password: string
}

export type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>
    user: User
    loading: boolean
    isAuthenticated: boolean
    signOut: () => void    
}

export type AuthProviderProps = {
    children: ReactNode
}

export type User = {
    user: string
}

export type Token = {
    refreshToken: string
}