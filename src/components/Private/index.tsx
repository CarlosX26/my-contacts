import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../contexts/authContext"

const Private = () => {
  const { user } = useAuthContext()

  return user ? <Outlet /> : <Navigate to="/" replace />
}

export default Private
