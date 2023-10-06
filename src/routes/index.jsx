import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Private from "./Private";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/projetoLista" element={<Home />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesApp;
