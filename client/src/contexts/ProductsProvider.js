import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [added, setAdded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("e-bazar"));
    setCartItems(cartData);
  }, [added]);

  const handleAddToLocalStorage = (product) => {
    const data = JSON.parse(localStorage.getItem("e-bazar"));
    const newCart = {...product, cartPosition: data?.length ? data?.length : 0}
    if (!data) {
      localStorage.setItem("e-bazar", JSON.stringify([newCart]));
      setAdded(!added);
    } else {
      localStorage.setItem("e-bazar", JSON.stringify([...data, newCart]));
      setAdded(!added);
    }
  };

  const info = { handleAddToLocalStorage, cartItems, added, setAdded };

  return (
    <ProductContext.Provider value={info}>{children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
