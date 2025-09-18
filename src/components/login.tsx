import { usersRegistered } from "@/helpers/utils";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")  
  const router = useRouter();

  const handleUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUsername(e.target.value)
  }

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  }

  const verifyUser = () => {

    if (!username || !password) {
      alert("Debes llenar ambos campos")
      return
    }

    const userFounded = usersRegistered.find((user) => user.username == username && user.password == password);

    if (userFounded) {
      router.push("/dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
    }

  }

  return (
    <div className="form p-5 w-[300px] mx-auto text-center flex flex-col">
      <h2>Iniciar Sesion</h2>
      <div className="container__form flex flex-col gap-2 my-3">
        <input onChange={handleUser} className="border-2 border-amber-500 p-2 rounded-[.3rem]" type="text" placeholder="Usuario" />
        <input onChange={handlePassword} className="border-2 border-amber-500 p-2 rounded-[.3rem]" type="password" placeholder="Password" />
      </div>
      <button onClick={verifyUser} className="bg-amber-500 p-3 rounded-[.3rem]">Ingresar</button>
    </div>
  )
}