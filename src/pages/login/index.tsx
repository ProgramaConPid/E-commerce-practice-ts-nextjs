import { usersRegistered } from "@/helpers/utils";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MyContext, UserLogged } from "../../context/Context";
import { Switch } from "@heroui/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isSelected, setIsSelected, setUserLogged } = useContext(MyContext);
  const router = useRouter();

  const redirect = () => {
    router.push("/");
  };

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const verifyUser = () => {
    if (!username || !password) {
      alert("Debes llenar ambos campos");
      return;
    }

    const userFound = usersRegistered.find(
      (user) => user.username == username && user.password == password
    );

    if (userFound) {
      const userLoggedSuccess: UserLogged = {
        username: userFound.username,
        password: userFound.password,
        isActive: isSelected
      };

      localStorage.setItem("user", userLoggedSuccess.username)
      setUserLogged(userLoggedSuccess);

      router.push("/dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 via-white to-amber-200">
      <div className="form w-[350px] p-8 bg-white shadow-xl rounded-2xl text-center flex flex-col">
        <h2 className="text-2xl font-bold text-amber-600 mb-6">
          Iniciar Sesión
        </h2>

        <div className="container__form flex flex-col gap-4 mb-6">
          <input
            id="username"
            value={username}
            onChange={handleUser}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            type="text"
            placeholder="Usuario"
          />
          <input
            id="password"
            value={password}
            onChange={handlePassword}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            type="password"
            placeholder="Contraseña"
          />
        </div>

        <Switch className="mx-auto mb-[1.5rem]" isSelected={isSelected} onValueChange={setIsSelected}>
          <p className={`${isSelected ? "text-sky-500" : "text-black"} duration-300 ease-in`}>Airplane Mode</p>
        </Switch>

        <p className="text-black mb-2.5">Estado Del Input: {isSelected ? "true" : "false"}</p>

        <button
          onClick={verifyUser}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 mb-5 rounded-lg shadow-md transition"
        >
          Ingresar
        </button>
        <a onClick={redirect} href="#" className="btnBack text-amber-500">
          Back Home
        </a>
      </div>
    </div>
  );
}
