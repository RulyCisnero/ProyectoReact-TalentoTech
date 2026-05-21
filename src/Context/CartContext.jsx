import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};


//Proveedor de contexto para el carrito de compras
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

 
  //si el producto ya se encuentra en el carrito, devuelve true, de lo contrario false
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  //Agregar al carrito de compras
  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya se encuentra en el carrito");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado al carrito");
  };
  
  //Eliminar del carrito de compras
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado del carrito");
  };

 //Vaciar carrito de compras
  const clearCart = () => {
    setCart([]);
  };
 
 //Total de items en el carrito de compras
  const getTotalItems = () => {
    return cart.length;
  };
  
//Total a pagar del carrito de compras
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.precio, 0);
  };


 //Checkout del carrito de compras
  const checkout = () => {
    alert("Gracias por su compra! Total a pagar: $" + getCartTotal().toFixed(2));
    clearCart();
    navigate("/");
  };

  const values = {
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};