import { useCart } from "../../Context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="detail-container">
      <div className="product-detail">
        <img src={item.imagen} alt={item.nombre} />
        <h3>{item.nombre} - Producto ID:{item.id}</h3>
        <p>{item.descripcion}</p>
        <span className="price">${item.precio}</span>
        <div className="item-actions">
          <button onClick={() => addToCart(item)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};