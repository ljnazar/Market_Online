import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState, useContext } from 'react';
import { generalContext } from './ContextContainer';
import { Link } from 'react-router-dom';

export default function Checkout() {

    const { darkMode, cart, totalProducts, totalPrice } = useContext(generalContext);

    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [dir, setDir] = useState('');

    const handleFirebase = () => {

      const order = {
        buyer: {
        name: nombre,
        email: email,
        phone: tel,
        address: dir,
        },
        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity})),
        total: Math.round(totalPrice() * 100)/100
      };

      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      // Realizar validaciones
      if(!nombre || !email || !tel || !dir){
        return
      }else if(false){
        console.log("");
      }else{

      addDoc(ordersCollection, order)
        .then(({ id }) => {
          console.log(id);
          // Mostrar ID de pedido en pantalla
          // Sacar botón de enviar pedido
          // Borrar carrito 
        })
        .catch(error => console.log('error', error));

      }
    };

  return (
    <div className={"pt-20 " + (darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black")}>
      {cart.map((item) => (
        <p>{item.quantity + " " + item.nombre + " " + item.precio}</p>
      ))}
      <p>{totalProducts}</p>
      <p>{totalPrice}</p>
      <div>
        <input placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Telefono" value={tel} onChange={(e) => setTel(e.target.value)}/>
        <input placeholder="Dirección" value={dir} onChange={(e) => setDir(e.target.value)}/>
      </div>
      <Link to={'/cart'}>Volver al carrito</Link>
      <button onClick={handleFirebase}>Enviar pedido</button>
    </div>
  )
}
