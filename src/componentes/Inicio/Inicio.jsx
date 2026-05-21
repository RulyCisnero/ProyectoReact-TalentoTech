import { Link } from "react-router-dom";
import "./Inicio.css";
import productos from "../../../public/data/productos.json";

function Inicio() {
  return (
    <section className="inicio">

      <div className="hero">
        <h2>Aros artesanales hechos a mano en arcilla polimérica</h2>
        <p>
          Encontrá los mejores productos al mejor precio.
        </p>
        <Link to="/productos" className="btn">
          Ver productos
        </Link>
      </div>

      <section className="destacados">
        <h3>Productos destacados</h3>

        <div className="destacados-grid">
          {productos.filter((producto) => producto.hotsale).slice(0, 3).map((producto) => (
            <article className="card" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
              />
              <h4>{producto.nombre}</h4>
              <p>${producto.precio.toLocaleString('es-CL')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="banner-sale">
        <h3>🔥 HotSale disponible</h3>

        <Link to="/hotsale" className="btn-sale">
          Ver ofertas
        </Link>
      </section>

    </section>
  );
}

export default Inicio;