import { Route, Routes } from "react-router-dom";
import './App.css'
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
