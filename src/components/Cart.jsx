// import React from "react";
// import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// function Cart({ cart, closeCart, increment, decrement, remove, totalPrice }) {
//   // Agar overlay par click kare to close ho jaye
//   const handleOverlayClick = (e) => {
//     if (e.target.id === "cartOverlay") {
//       closeCart();
//     }
//   };

//   return (
//     <div
//       id="cartOverlay"
//       onClick={handleOverlayClick}
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//     >
//       <div className="bg-white rounded-lg p-6 w-[90%] md:w-[500px] relative">
//         {/* Close Button */}
//         <button
//           onClick={closeCart}
//           className="absolute top-2 right-2 text-gray-600 hover:text-black"
//         >
//           <FaTimes size={20} />
//         </button>

//         <h2 className="text-xl font-bold mb-4">Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty.</p>
//         ) : (
//           <>
//             <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
//               {cart.map((item) => (
//                 <li
//                   key={item.id}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-gray-500">${item.price}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => decrement(item.id)}
//                       className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                     >
//                       <FaMinus size={12} />
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                     >
//                       <FaPlus size={12} />
//                     </button>
//                     <button
//                       onClick={() => remove(item.id)}
//                       className="text-red-500 hover:text-red-700 ml-2"
//                     >
//                       <FaTrash size={14} />
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-4 flex justify-between items-center font-bold">
//               <span>Total:</span>
//               <span>${totalPrice}</span>
//             </div>

//             <button
//               onClick={() =>
//                 window.open(
//                   `https://wa.me/923001234567?text=I want to order: ${cart
//                     .map((item) => `${item.name} (x${item.quantity})`)
//                     .join(", ")}. Total: $${totalPrice}`,
//                   "_blank"
//                 )
//               }
//               className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//             >
//               Order on WhatsApp
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;







import React from "react";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function Cart({ cart, setCartOpen, increment, decrement, removeItem, totalPrice, placeOrder }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="bg-white w-full sm:w-[400px] h-full shadow-lg flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">🛒 Cart</h2>
          <button onClick={() => setCartOpen(false)} className="text-gray-600 hover:text-black">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                <div className="flex-1 px-3">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">Rs. {item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => decrement(item.id)} className="p-1 bg-gray-200 rounded">
                      <FaMinus size={10} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increment(item.id)} className="p-1 bg-gray-200 rounded">
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t">
            <h3 className="font-semibold mb-2">Total: Rs. {totalPrice}</h3>
            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
