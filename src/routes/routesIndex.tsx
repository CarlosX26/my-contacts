import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default RoutesIndex
