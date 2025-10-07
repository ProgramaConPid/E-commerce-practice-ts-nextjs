import { useState } from "react";

interface FormData {
  name: string, 
  email: string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [errores, setErrores] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validarFormulario = (): string[] => {
    const errores: string[] = [];
  
    if (!formData.name) errores.push('El nombre es requerido');
    if (!formData.email.includes('@')) errores.push('El correo debe ser válido');
  
    return errores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const erroresFormulario = validarFormulario();
  
    if (erroresFormulario.length > 0) {
      setErrores(erroresFormulario);
    } else {
      alert('Formulario enviado correctamente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar</button>

      {errores.length > 0 && (
        <ul>
          {errores.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
