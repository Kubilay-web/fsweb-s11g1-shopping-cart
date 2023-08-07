import React, { useState } from "react";
import { createContext } from "react";
import { data } from "../data";

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const ProductContext = createContext();
export default ProductContextProvider;
