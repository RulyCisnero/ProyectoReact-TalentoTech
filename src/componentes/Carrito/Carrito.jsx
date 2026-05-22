import { useCart } from "../../Context/CartContext";

function Carrito() {

  const {
    cart,
    removeFromCart,
    clearCart,
    getCartTotal
  } = useCart();

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <section className="container py-5">

      <h2 className="mb-4">
        Carrito de compras
      </h2>

      {cart.map(producto => (

        <div
          key={producto.id}
          className="card mb-3 p-3"
        >

          <div className="row align-items-center">

            <div className="col-md-3">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="img-fluid rounded"
              />
            </div>

            <div className="col-md-6">

              <h4>{producto.nombre}</h4>

              <p>{producto.descripcion}</p>

            </div>

            <div className="col-md-3 text-end">

              <h5>${producto.precio}</h5>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(producto.id)}
              >
                Eliminar
              </button>

            </div>

          </div>

        </div>

      ))}

      <div className="text-end mt-4">

        <h3>
          Total: ${getCartTotal()}
        </h3>

        <button
          className="btn btn-warning mt-2"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>

      </div>

    </section>
  );
}

export default Carrito;