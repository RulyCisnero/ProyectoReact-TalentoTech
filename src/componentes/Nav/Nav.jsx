import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>

         <li>
          <Link to="/nuevo-producto">Nuevo Producto</Link>
        </li>


        <li>
          <Link to="/hotsale">HotSale</Link>
        </li>

        <li>
          <Link to="/carrito">
            🛒
            {totalItems > 0 && (
              <span className="incart">
                {totalItems}
              </span>
            )}
          </Link>
        </li>

      </ul>
    </nav>
  );
};