import { useRouter } from "next/router";
import { UserStore } from "@/helpers/utils";
import { usersRegistered } from "@/helpers/utils";

export default function Dashboard() {
  const router = useRouter();

  const users = new UserStore()

  const findUserByName = () => {
    const username = window.prompt("Enter the username to search on the list");

    if (!username) {
      return `Error searching an user, enter a valid username`;
    }

    return users.findByName(username, usersRegistered);
  };

  const createNewUser = () => {
    const userName = window.prompt("Enter the username");
    const userPassword = window.prompt("Enter the password");

    if (!userName || !userPassword) {
      return `Error creating the new user, enter a valid username and password`;
    }

    users.createUser(userName, userPassword, usersRegistered);
    return `User ${userName} has been added to the list of users.`;
  };

  const updateUser = () => {
    users.updateUser(usersRegistered)
  }

  const removeUser = () => {
    users.removeUser(usersRegistered)
  }

  return (
    <div className="container h-[100vh] flex flex-col justify-center items-center">
      <div className="content flex flex-col border-2 rounded-[.3rem] w-[350px] p-5">
        <h1 className="text-center text-2xl">Dashboard Principal</h1>
        <div className="container__crud flex flex-col gap-4 my-10">
          <button className="bg-red-600 text-white p-2 rounded-[.3rem] cursor-pointer" onClick={() => alert(`HTTP METHOD GET: ${users.getUsers(usersRegistered)}`)}>Get Users</button>
          <button className="bg-green-600 text-white p-2 rounded-[.3rem] cursor-pointer" onClick={() => alert(`HTTP METHOD GET: ${findUserByName()}`)}>Find by name</button>
          <button className="bg-orange-600 text-white p-2 rounded-[.3rem] cursor-pointer" onClick={() => alert(`HTTP METHOD POST: ${createNewUser()}`)}>Create user</button>
          <button className="bg-violet-600 text-white p-2 rounded-[.3rem] cursor-pointer" onClick={() => alert(`HTTP METHOD PUT: ${updateUser()}` )}>Update user</button>
          <button className="bg-yellow-600 text-white p-2 rounded-[.3rem] cursor-pointer" onClick={() => alert(`HTTO METHOD DELETE: ${removeUser()}`)}>Remove User</button>
        </div>
        <button
          className="bg-blue-500 p-4 text-white rounded-[.3rem]"
          onClick={() => {
            router.back();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
