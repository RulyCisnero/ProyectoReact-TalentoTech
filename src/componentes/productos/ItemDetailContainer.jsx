import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ProductoDetalle";

export const ItemDetailContainer = () => {

  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then(res => res.json())
      .then(data => {
        const productoEncontrado = data.find(
          prod => prod.id === Number(id)
        );
        setProducto(productoEncontrado);
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <ItemDetail item={producto} />
  );
};