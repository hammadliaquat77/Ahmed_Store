import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../components/Cart"; 

import Charger_1 from "../assets/Products/Charger_1.png";
import Charger_2 from "../assets/Products/Charger_2.png";
import Boya from "../assets/Products/Boya.png";
import Pen_1 from "../assets/Products/Pen_1.png";
import Pen_2 from "../assets/Products/Pen_2.png";
import Handfree_1 from "../assets/Products/HandFree_1.png";


// Dummy Products Data
const productsData = [
  { id: 1, name: "Wireless Earbuds", price: 2500, category: "Earbuds", image: "https://via.placeholder.com/200x150?text=Earbuds" },
  { id: 2, name: "Power Bank 10000mAh", price: 3200, category: "Power Banks", image: "https://via.placeholder.com/200x150?text=PowerBank" },
  { id: 3, name: "Smart Watch", price: 4500, category: "Smart Watches", image: "https://via.placeholder.com/200x150?text=SmartWatch" },
  { id: 4, name: "Bluetooth Speaker", price: 3800, category: "Speakers", image: "https://via.placeholder.com/200x150?text=Speaker" },
  { id: 5, name: "Fast Charger 25W", price: 1500, category: "Chargers", image: Charger_1 },
  { id: 9, name: "Fast Charger 20W", price: 300, category: "Chargers", image: Charger_2 },
  { id: 10, name: "Pen", price: 300, category: "Chargers", image: Pen_1 },
  { id: 12, name: "Pen", price: 300, category: "Chargers", image: Pen_2 },
  { id: 11, name: "Boya Mic", price: 300, category: "Chargers", image: Boya },
  { id: 6, name: "Mobile Back Cover", price: 800, category: "Covers", image: "https://via.placeholder.com/200x150?text=Cover" },
  { id: 7, name: "Type-C Cable", price: 700, category: "Chargers", image: "https://via.placeholder.com/200x150?text=Cable" },
  { id: 8, name: "Neckband Earphones", price: 2000, category: "Earbuds", image: "https://via.placeholder.com/200x150?text=Neckband" },
  { id: 13, name: "HandFree Earphones", price: 400, category: "Earbuds", image: Handfree_1 },
];

function Products() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const categories = ["All", ...new Set(productsData.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setCartOpen(true);
  };

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const placeOrder = () => {
    let message = "📦 *New Order* \n\n";
    cart.forEach((item) => {
      message += `🔹 ${item.name} (x${item.qty}) = Rs.${item.price * item.qty}\n`;
    });
    message += `\n💰 Total: Rs.${totalPrice}`;
    const url = `https://wa.me/923362016272?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24 px-5">
      <h1 className="text-3xl font-bold text-center py-8">All Mobile Accessories</h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-zinc-900 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-28 object-cover mb-4 rounded-md"
            />
            <h2 className="text-base font-semibold text-center">{product.name}</h2>
            <p className="text-gray-600 mb-2 text-sm">Rs. {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition text-sm"
            >
              <FaShoppingCart /> Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart Component */}
      {cartOpen && (
        <Cart
          cart={cart}
          setCartOpen={setCartOpen}
          increment={increment}
          decrement={decrement}
          removeItem={removeItem}
          totalPrice={totalPrice}
          placeOrder={placeOrder}
        />
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-5 right-5 bg-zinc-900 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaShoppingCart />
        {cart.length > 0 && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
}

export default Products;
