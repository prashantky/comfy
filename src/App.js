import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import {
  Home,
  ProductsPage,
  SingleProduct,
  Error,
  About,
  Checkout,
  Cart
} from "./pages/index";
toast.configure();

function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/products" element={<ProductsPage />}></Route>
          <Route exact path="/products/:id" element={<SingleProduct />}></Route>

          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
