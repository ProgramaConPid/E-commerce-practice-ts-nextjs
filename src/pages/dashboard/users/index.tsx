import { useRouter } from "next/router";
import { UserStore } from "@/helpers/utils";
import { usersRegistered } from "@/helpers/utils";

export default function Dashboard() {
  const router = useRouter();

  const users = new UserStore();

  const getUsers = () => {
    return users.getUsers(usersRegistered);
  };

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
    return users.updateUser(usersRegistered)
  };

  const removeUser = () => {
    const result = users.removeUser(usersRegistered);
    return result;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl w-[380px] p-8 flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Dashboard Principal
        </h1>

        <div className="w-full flex flex-col gap-3">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow transition-all"
            onClick={() => alert(`HTTP METHOD GET: ${getUsers()}`)}
          >
            Get Users
          </button>
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow transition-all"
            onClick={() => alert(`HTTP METHOD GET: ${findUserByName()}`)}
          >
            Find by Name
          </button>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow transition-all"
            onClick={() => alert(`HTTP METHOD POST: ${createNewUser()}`)}
          >
            Create User
          </button>
          <button
            className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-lg shadow transition-all"
            onClick={() => alert(`HTTP METHOD PUT: ${updateUser()}`)}
          >
            Update User
          </button>
          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow transition-all"
            onClick={() => alert(`HTTP METHOD DELETE: ${removeUser()}`)}
          >
            Remove User
          </button>
        </div>

        <button
          className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow transition-all"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
