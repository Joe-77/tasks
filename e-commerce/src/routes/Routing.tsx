import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Details from "../components/product-details/Details";
import Cart from "../components/cart/Cart";
import Fav from "../components/fav/Fav";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Fav />} />
    </Routes>
  );
}
