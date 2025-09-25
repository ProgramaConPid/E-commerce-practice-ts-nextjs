import React, {JSX} from 'react'

export type Status = "success" | "warning" | "info" | "error" | "neutral"
interface BadgeProps {
  label: string
  status?: Status
  icon?: JSX.Element
  title?:string
}

export const Badge = ({label, status, icon}:BadgeProps) => {
  const date = new Date()
  const showAlerts = () => {
    if (status === "success") {
      return alert("Producto Agregado!")
    } else if (status === "error") {
      return alert("Error al agregar producto!")
    } else if (status === "warning") {
      return alert("Apresurate, Quedan pocas referencias!")
    } else if (status === "info") {
      return alert(`"Producto publicado la fecha", ${date}`)
    } else {
      return alert("No Disponible")
    }
  }

  return (
    <div onClick={showAlerts} className={`badge ${status} text-center text-white flex items-center gap-3 justify-center h-max self-end p-2 rounded-[1.5rem] cursor-crosshair`}>
      {icon}
      <span>{label}</span>
    </div>
  )
}
