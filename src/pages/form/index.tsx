import { Button } from "@heroui/react";
import { useState } from "react";
import { handleNotification } from "@/helpers/utils";
import { ToastContainer } from "react-toastify";

interface FormData {
  name: string;
  password: string;
  confirmPass: string;
  email: string;
  phone: string;
  description: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    phone: "",
    description: "",
  });
  const [errores, setErrores] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validarFormulario = (): string[] => {
    const errores: string[] = [];

    if (!formData.name) errores.push("El nombre es requerido");
    if (!formData.email.includes("@"))
      errores.push("El correo debe ser válido");
    if (
      !(formData.password === formData.confirmPass) ||
      !formData.password ||
      !formData.confirmPass
    )
      errores.push("Las contraseñas deben coincidir");

    return errores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formValues = Object.values(formData)

    const erroresFormulario = validarFormulario();

    if (erroresFormulario.length > 0) {
      setErrores(erroresFormulario);
    } else {
      console.log("Form Values: \n");
      formValues.forEach((val) => console.log(val)); 
      setErrores([]);
      setFormData({name: "", email: "", password: "", confirmPass: "", phone: "", description: ""});
      handleNotification("Formulario enviado correctamente", "success", 4000);
    }
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="form bg-danger-900 w-[500px] mx-auto p-7 flex flex-col items-center justify-center gap-5 rounded-[1rem]"
      >
        <h2 className="text-white text-2xl">Iniciar Sesion</h2>
        <div className="flex gap-3 w-full">
          <div className="w-full flex flex-col items-start">
            <label className="text-white font-bold mb-2">Nombre:</label>
            <input
              className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
              type="text"
              name="name"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col justify-between items-start">
            <label className="text-white font-bold mb-2">Email:</label>
            <input
              className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
              type="text"
              name="email"
              placeholder="Your Email..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-white font-bold mb-2">Password:</label>
          <input
            className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
            type="password"
            name="password"
            placeholder="Your Password..."
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-white font-bold mb-2">Confirm Password:</label>
          <input
            className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
            type="password"
            name="confirmPass"
            placeholder="Your Password..."
            value={formData.confirmPass}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-white font-bold mb-2">Phone Number:</label>
          <input
            className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
            type="number"
            name="phone"
            placeholder="Phone Number..."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-white font-bold mb-2">Description:</label>
          <input
            className="border-[1px] border-white text-white rounded-[.4rem] p-3 bg-transparent w-full"
            type="text"
            name="description"
            placeholder="Description..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <Button
          className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          radius="full"
          type="submit"
          size="lg"
        >
          Enviar Formulario
        </Button>

        {errores.length > 0 && (
          <ul className="list-disc flex flex-col gap-2">
            {errores.map((error, index) => (
              <li
                className="bg-white rounded-[.6rem] p-2 text-center"
                key={index}
              >
                ERROR: {error}
              </li>
            ))}
          </ul>
        )}
        <ToastContainer />
      </form>
    </div>
  );
}
