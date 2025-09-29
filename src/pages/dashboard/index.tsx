import { useRouter } from "next/router";
import { UserStore } from "@/helpers/utils";
import { usersRegistered } from "@/helpers/utils";

export default function Dashboard() {
  const router = useRouter();

  const users = new UserStore();

  const redirect = () => {
    localStorage.removeItem("User");
    localStorage.setItem("Auth", "false");
    router.back();
  };

  const findUserByName = () => {
    const username = window.prompt("Enter the username to search on the list");

    if (!username) {
      return `Error searching a user, enter a valid username`;
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
    return users.updateUser(usersRegistered);
  };

  const removeUser = () => {
    return users.removeUser(usersRegistered);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[400px] p-6">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Dashboard
        </h1>
        <div className="flex flex-col gap-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() =>
              alert(`HTTP METHOD GET: ${users.getUsers(usersRegistered)}`)
            }
          >
            Get Users
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => alert(`HTTP METHOD GET: ${findUserByName()}`)}
          >
            Find by Name
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => alert(`HTTP METHOD POST: ${createNewUser()}`)}
          >
            Create User
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => alert(`HTTP METHOD PUT: ${updateUser()}`)}
          >
            Update User
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => alert(`HTTP METHOD DELETE: ${removeUser()}`)}
          >
            Remove User
          </button>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 w-full transition-all"
          onClick={redirect}
        >
          Back
        </button>
      </div>
    </div>
  );
}
