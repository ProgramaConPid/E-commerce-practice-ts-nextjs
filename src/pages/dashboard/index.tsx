import { useRouter } from "next/router";
import { UserStore } from "@/helpers/utils";
import { usersRegistered } from "@/helpers/utils";
import { useState } from "react";
import { createComment, getComments } from "@/services/comments";

export default function Dashboard() {
  const router = useRouter();
  const [comments, setComments] = useState<object[]>([]);
  const [inputName, setInputName] = useState("");
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState("")

  const users = new UserStore();

  const redirect = () => {
    localStorage.removeItem("User");
    localStorage.setItem("Auth", "false");
    router.back();
  };

  const getCommentsDB = async () => {
    const data = await getComments();
    setComments(data.response);
    setModal("flex")
  };

  const findUserByName = () => {
    const username = window.prompt("Enter the username to search on the list");

    if (!username) {
      return `Error searching a user, enter a valid username`;
    }

    return users.findByName(username, usersRegistered);
  };

  const updateUser = () => {
    return users.updateUser(usersRegistered);
  };

  const removeUser = () => {
    return users.removeUser(usersRegistered);
  };

  // -------------------------------
  const saveFormData = async () => {
    const newName = inputName;
    const newText = inputText;

    const res = await createComment(newName, newText);

    setTimeout(() => {
      setInputName("");
      setInputText("");
    }, 1000);

    return res;
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
            onClick={getCommentsDB}
          >
            Get Comments
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => alert(`HTTP METHOD GET: ${findUserByName()}`)}
          >
            Find by Name
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

        <div className="mt-8 border-[1px] p-5 rounded-[.5rem]">
          <h2 className="text-center mb-5">Create A New Comment</h2>
          <div className="form__group flex flex-col gap-3">
            <input
              onChange={(e) => setInputName(e.target.value)}
              className="border-2 p-2 rounded-[.3rem] border-gray-400"
              type="text"
              placeholder="Name..."
              value={inputName}
            />
            <input
              onChange={(e) => setInputText(e.target.value)}
              className="border-2 border-gray-400 p-2 rounded-[.3rem]"
              type="text"
              placeholder="Text..."
              value={inputText}
            />

            <button
              onClick={async () => console.log(await saveFormData())}
              className="bg-orange-500 text-white p-3 rounded-[.6rem] cursor-pointer"
            >
              Create Comment
            </button>
          </div>
          <div className={`${modal ? `${modal} items-center justify-center fixed bg-gray-500/70 text-white top-0 left-0 w-full h-full text-[1rem]` : "hidden"}`}>
            <div className="fixed top-3 right-3 cursor-pointer p-2 bg-black text-white" onClick={() => setModal("hidden")}>X</div>
            <div className="p-3 bg-white border-2 text-black rounded-[.4rem]">
              <p>Content Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
