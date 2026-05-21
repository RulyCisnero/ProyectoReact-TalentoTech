import { useEffect, useState } from "react"
import TarjetaProducto from "./TarjetaProducto"

function ListaProductos({ mensaje, soloHotSale }) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar productos');
                return res.json()
            })
            .then(data => {
                setProductos(data)
                setCargando(false)
            })
            .catch(err => {
                setError(err.message)
                setCargando(false)
            });
    }, []);

    const productosFiltrados = soloHotSale
        ? productos.filter(producto => producto.hotsale)
        : productos;



    if (cargando) return <p>Cargando productos...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="row">
            <h2 className="mb-4">{mensaje}</h2>
            {productosFiltrados.map(prod => (
                <TarjetaProducto key={prod.id} {...prod} />
            ))}
        </div>
    );
}

export default ListaProductos;