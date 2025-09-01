import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from "./components/Footer";
import Products from "./pages/Products";

import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToTop";


function App() {

  return (
    <> 
      <Navbar />
      <ScrollToHash/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
