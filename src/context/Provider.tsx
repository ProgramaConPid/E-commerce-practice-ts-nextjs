import { useState, JSX } from 'react'
import { MyContext, UserLogged } from "./Context";

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Provider = ({children}:Props) => {
  const [userLogged, setUserLogged] = useState<UserLogged>({} as UserLogged)
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <MyContext.Provider value={{userLogged, setUserLogged, isSelected, setIsSelected}}>
      {children}
    </MyContext.Provider>
  )
}