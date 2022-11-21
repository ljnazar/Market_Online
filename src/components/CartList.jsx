import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import ItemCart from './ItemCart';

export default function Cart() {

  const { darkMode, cart, totalProducts, totalPrice } = useContext(generalContext);

  /* Orden Hardcodeada*/

  const order = {
    buyer: {
      name: 'Javier',
      email: 'javiersavid@gmail.com',
      phone: '3513438975',
      address: 'Lima 223',
    },
    item: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity})),
    total: Math.round(totalPrice() * 100)/100
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        console.log(id);
      })
      .catch(error => console.log('error', error));
  };

  if(cart.length === 0) {
    return (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to={'/'}>Hacer compras</Link>
        </>
    )
  }

  return (
    <>
      <div className="flex justify-center flex-wrap"
        style={{
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        {
          cart.map(product => <ItemCart product={product} />)
        }
      </div>
      <p>
        Cantidad de productos: { totalProducts() }
      </p>
      <p>
        Total: { Math.round(totalPrice() * 100)/100 } USD
      </p>
      <p>
        <Link to={'/'}>Seguir comprando</Link>
      </p>
      {/* <p>
        <Link to={'/checkout'}>Finalizar compra</Link>
      </p> */}
      <button onClick={handleClick}>Finalizar compra</button>
    </>
  )
    
}
