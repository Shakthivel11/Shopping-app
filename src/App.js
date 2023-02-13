import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routers from "./Combinerouters/Routers";
import NavbarComp from "./Headers/Navbar";
import Navbar from "./Headers/Navbar";
import Addtocart from "./Home/Addtocart";
import Productpage from "./Home/Product";
import CartPage from "./Home/Shoppingcart";
import Singleproduct from "./Home/Singleproduct";
import Login from "./Login/Login";

function App() {
  return (
    <div>
      {/* <NavbarComp />
      <Routers /> */}
      <CartPage/>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// const ShoppingCart = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: 'T-Shirt', price: 20 },
//     { id: 2, name: 'Jeans', price: 30 },
//     { id: 3, name: 'Sneakers', price: 40 },
//   ]);

//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeFromCart = (item) => {
//     setCart(cart.filter((i) => i.id !== item.id));
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>
//         <h3>Items</h3>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => addToCart(item)}>Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Cart</h3>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => removeFromCart(item)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
