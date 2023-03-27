import { Route, Routes } from "react-router-dom"
import Private from "../components/Private"
import Dashboard from "../pages/dashboard"
import Home from "../pages/home"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route element={<Private />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default RoutesIndex
