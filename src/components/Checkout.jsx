import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext } from 'react';
import { generalContext } from './ContextContainer';

export default function Checkout() {

    const { darkMode, cart, totalProducts, totalPrice } = useContext(generalContext);

    /* Orden Hardcodeado*/

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

  return (
    <div className={darkMode ? "bg-neutral-800" : "bg-white"}>
        <button onClick={handleClick}>Enviar pedido</button>
    </div>
  )
}
