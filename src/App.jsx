import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from "./components/Footer";
import Products from "./pages/Products";

import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToTop";
import Repairing from "./pages/Repairing";


function App() {

  return (
    <> 
      <Navbar />
      <ScrollToHash/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/Repairing" element={<Repairing />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
