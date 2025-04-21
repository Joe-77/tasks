import { Toaster } from "sonner";
import Nav from "./components/nav/Nav";
import Routing from "./components/routing/Routing";
import Scroll from "./components/scroll/Scroll";

export default function App() {
  return (
    <main>
      <Nav />
      <Routing />
      <Scroll />
      <Toaster richColors position="top-center" />
    </main>
  );
}
