import "./Estilos/Estilos.css";

import Barra from "./Componentes/Barra.jsx"
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home.jsx";
import Pokemones from "./Views/Pokemones.jsx";
import DetallesPokemones from "./Views/DetallesPokemones.jsx";
import NotFound from "./Views/NotFound.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
    
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:id" element={<DetallesPokemones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

