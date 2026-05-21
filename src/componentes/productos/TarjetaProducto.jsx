import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ id, nombre, precio, imagen }) {

  const [favorito, setFavorito] = useState(false);

  const navigate = useNavigate();

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  const handleVerDetalleClick = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div
        className={`card ${styles.card}`}
      >
        <img
          src={imagen}
          className={`card-img-top ${styles.cardImg}`}
          alt={nombre}
        />

        <div className="card-body">
          <h5 className="card-title">
            {nombre}
          </h5>

          <p className="card-text">
            ${precio}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-primary"
              onClick={handleVerDetalleClick}
            >
              Ver detalle
            </button>

            <span
              className={styles.estrella}
              onClick={toggleFavorito}
            >
              {favorito ? "⭐" : "☆"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TarjetaProducto;