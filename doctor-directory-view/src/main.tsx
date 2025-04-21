import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Routers } from "react-router-dom";
import { BookingProvider } from "./store/context/context.tsx";

createRoot(document.getElementById("root")!).render(
  <BookingProvider>
    <Routers>
      <App />
    </Routers>
  </BookingProvider>
);
