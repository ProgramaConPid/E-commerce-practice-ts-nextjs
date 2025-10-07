import { createContext } from 'react'

export interface UserLogged {
  username: string,
  password: string,
  isActive: boolean
}

export type ContextProps = {
  userLogged: UserLogged;
  setUserLogged: (user: UserLogged) => void
  isSelected: boolean,
  setIsSelected: (isSelected: boolean) => void
}

export const MyContext = createContext<ContextProps>({} as ContextProps)
