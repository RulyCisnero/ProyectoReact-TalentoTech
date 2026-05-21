import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/layout/Layout";
import ListaProductos from "./componentes/productos/ListaProductos"; "./componentes/Productos/ListaProductos";
import FormularioContainer from "./componentes/FormularioProducto/FormularioContainer";
import Inicio from "./componentes/Inicio/Inicio";
import { ItemDetailContainer } from "./componentes/productos/ItemDetailContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="/hotsale" element={<ListaProductos Mensaje="Ofertas del día" soloHotSale={true} />} />
        <Route path="/productos" element={<ListaProductos Mensaje="Productos Destacados" soloHotSale={false} />} />
        <Route path="/nuevo-producto" element={<FormularioContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
  );
}

export default App;