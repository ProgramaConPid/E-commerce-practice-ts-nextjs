import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
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

    return errores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const erroresFormulario = validarFormulario();

    if (erroresFormulario.length > 0) {
      setErrores(erroresFormulario);
    } else {
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <div className="container h-[100vh] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-danger-500 w-[400px] mx-auto p-7 flex flex-col items-center justify-center gap-5 rounded-[1rem]">
        <h2 className="text-white text-2xl">Iniciar Sesion</h2>
        <div>
          <label>Nombre:</label>
          <input
            className="border-[1px] border-white ml-[1rem] rounded-[.4rem] p-3"
            type="text"
            name="nombre"
            placeholder="Your Name..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            className="border-[1px] border-white ml-[1rem] rounded-[.4rem] p-3"
            type="email"
            name="email"
            placeholder="Your Password..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white p-5 rounded-[1rem] cursor-pointer">Enviar</button>

        {errores.length > 0 && (
          <ul>
            {errores.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}
