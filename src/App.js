import React, { useState } from "react";
import { Route } from "react-router-dom";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
