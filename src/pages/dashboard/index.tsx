import { useRouter } from "next/router"

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <h1>Dashboard Principal</h1>
      <button onClick={() => {router.back()}}>Regresar</button>
    </>
  )
}