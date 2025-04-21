import { Navigate, Route, Routes } from "react-router-dom";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}
