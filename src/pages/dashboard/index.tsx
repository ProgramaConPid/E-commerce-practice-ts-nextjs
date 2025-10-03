import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  getProperties,
  createProperty,
  deleteProperty,
  updateProperty,
} from "@/services/properties";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import FormCreate from "@/components/FormCreate";
import FormUpdate from "@/components/FormUpdate";
import Property from "@/database/models/properties.model";
import { handleNotification } from "@/helpers/utils";
import { ToastContainer } from "react-toastify";

type Property = {
  _id: string;
  name: string;
  value: number;
  img: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [modal, setModal] = useState("");
  const [formModal, setFormModal] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState<number | "">("");
  const [inputImage, setInputImage] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const saveFormData = async () => {
    const newProperty = {
      name: inputName,
      value: inputValue,
      img: inputImage,
    };

    createProperty(
      newProperty.name,
      Number(newProperty.value),
      newProperty.img
    );
    setTimeout(() => {
      handleNotification(
        `Property with name: ${newProperty.name} has been created successfully`,
        "success",
        4000
      );
      console.log("Saving...", newProperty);
    }, 500);

    setInputName("");
    setInputValue("");
    setInputImage("");

    return newProperty;
  };

  const getIdProperty = (id: string) => {
    setFormModal(true);
    setSelectedId(id);
  };

  const saveFormDataUpdate = async () => {
    if (!selectedId) return;

    const updateData = {
      name: inputName,
      value: inputValue,
      img: inputImage,
    };

    if (!updateData.name || !updateData.value || !updateData.img) {
      handleNotification(
        `Error, it was not possible to modify the property with ID: ${selectedId}, Please enter valid values.`,"error",
        4000
      );
      return;
    }

    await updateProperty(
      selectedId,
      updateData.name,
      Number(updateData.value),
      updateData.img
    );

    setTimeout(async() => {
      handleNotification(
        `Property with ID: ${selectedId} has been updated successfully`,
        "success",
        4000
      );

      await getPropertiesDB()

      setInputName("")
      setInputValue("")
      setInputImage("")
      setFormModal(false)
    }, 500);
  };

  const redirect = () => {
    localStorage.removeItem("User");
    localStorage.setItem("Auth", "false");
    router.back();
  };

  const redirectDashboard = () => {
    router.push("/dashboard/users");
  };

  const getPropertiesDB = async () => {
    const data = await getProperties();

    if (Array.isArray(data.response)) {
      setProperties(data.response);
    } else {
      setProperties([]);
    }

    setModal("flex");
  };

  const deletePropertyAndRefresh = async (id: string) => {
    deleteProperty(id);

    setTimeout(async () => {
      await getPropertiesDB();
    }, 500);

    handleNotification(
      `Property with ID: ${id} has been removed successfully`,
      "success",
      4000
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[400px] p-6">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Dashboard
        </h1>
        <div className="flex flex-col gap-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all cursor-pointer"
            onClick={getPropertiesDB}
          >
            Get Properties
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all cursor-pointer"
            onClick={() => setFormModal(true)}
          >
            Create New Property
          </button>
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white py-3 px-4 rounded-lg mt-6 w-full transition-all cursor-pointer"
          onClick={redirectDashboard}
        >
          Dashboard Users
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 w-full transition-all"
          onClick={redirect}
        >
          Back
        </button>
      </div>

      <FormCreate
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        saveFormData={saveFormData}
        inputName={inputName}
        setInputName={setInputName}
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputImage={inputImage}
        setInputImage={setInputImage}
      />

      <AnimatePresence>
        {modal === "flex" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center fixed bg-black/80 top-0 left-0 h-full w-full z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gray-900 text-white rounded-2xl shadow-2xl w-[95%] max-w-6xl h-[90vh] overflow-auto border border-gray-700"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
                <h2 className="text-2xl font-bold text-sky-400">Properties</h2>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                  onClick={() => setModal("hidden")}
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              {properties.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {properties.map((p, i) => (
                    <li
                      id={`${p._id}`}
                      key={i}
                      className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-4 flex flex-col gap-4"
                    >
                      <Image
                        src={p.img}
                        alt="Property Image"
                        height={200}
                        width={200}
                        className="w-full h-[180px] object-cover rounded-lg"
                      />
                      <h3 className="text-lg font-semibold text-center text-white truncate">
                        {p.name}
                      </h3>
                      <div className="price flex items-center justify-center gap-2">
                        <p className="text-gray-400">Price:</p>
                        <p className="text-sky-400 font-bold">${p.value}</p>
                      </div>
                      <div className="actions flex justify-center gap-4 mt-auto">
                        <button className="bg-sky-600 hover:bg-sky-500 transition-colors p-2 rounded-lg shadow-md">
                          <MdOutlineEdit
                            onClick={() => getIdProperty(p._id)}
                            className="text-white text-[1.2rem] cursor-pointer"
                          />
                        </button>
                        <button className="bg-red-600 hover:bg-red-500 transition-colors p-2 rounded-lg shadow-md">
                          <FaTrashAlt
                            onClick={() => deletePropertyAndRefresh(p._id)}
                            className="text-white text-[1.2rem] cursor-pointer"
                          />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-400">No properties found</p>
              )}

              <FormUpdate
                isOpen={formModal}
                onClose={() => setFormModal(false)}
                saveFormData={saveFormDataUpdate}
                inputName={inputName}
                setInputName={setInputName}
                inputValue={inputValue}
                setInputValue={setInputValue}
                inputImage={inputImage}
                setInputImage={setInputImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}
