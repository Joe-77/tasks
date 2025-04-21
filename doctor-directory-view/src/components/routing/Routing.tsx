import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Doctors from "../doctor/Doctors";
import Details from "../doctor/Doctor";
import Reservations from "../reservations/Reservations";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<Details />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  );
}
