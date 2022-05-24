import { BrowserRouter, Routes, Route } from "react-router-dom"

// navbar
import Navbar from "./components/Narbar/Navbar"

// pages
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"

export default function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
   </BrowserRouter>
  )
}

