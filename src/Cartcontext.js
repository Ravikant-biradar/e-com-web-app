import React, { useState } from "react";
import { createContext } from "react";

 export const cart = createContext();

function Cartcontext({ children }) {
  const [cartitem, setcartitem] = useState([]);
  const addtocart = (...ju) => {
     setcartitem([...cartitem , ju])
  };
  return (
    <>
 <cart.Provider value={{cartitem , addtocart}}>{children}</cart.Provider>
    </>
  );
}

export default Cartcontext;
