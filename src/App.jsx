import "./index.css";
import RoutesApp from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </BrowserRouter>
  );
}
