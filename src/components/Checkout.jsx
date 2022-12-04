import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState, useContext } from 'react';
import { generalContext } from './ContextContainer';
import { Link, useNavigate } from 'react-router-dom';
import LoaderSpiner from './LoaderSpiner';

export default function Checkout() {

    const { darkMode, cart, clearCart, totalProducts, totalPrice } = useContext(generalContext);

    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [dir, setDir] = useState('');

    const [validator, setValidator] = useState(false);

    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const handleFirebase = () => {
      
      if(nombre && tel && email && dir){
      
        setLoader(true);

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

        addDoc(ordersCollection, order)
          .then(({ id }) => {
            //console.log(id);
            setLoader(false);
            clearCart();
            navigate(`/confirmation/${id}`);
          })
          .catch(error => console.log('error', error));

      } else {
        setValidator(true);
      }

    }


  if (loader)
    return (
      <LoaderSpiner />
  )
    
  return (
    <div className={"pt-20 flex flex-col items-center " + (darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black")}>
      <h2 className="text-sm py-2 font-bold">
        DETALLE DEL PEDIDO
      </h2>
      <div className="px-4 py-2 border-2">
        {cart.map((item) => (
          <p className="mb-1 font-semibold">{item.quantity + " " + item.nombre + " " + item.precio}</p>
        ))}
      </div>
      <p>{totalProducts}</p>
      <p>{totalPrice}</p>
      <div className="mt-4">
        <input type="email" placeholder="Email" className="peer border border-slate-400" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className="invisible peer-invalid:visible text-red-700 font-light">
          Ingrese un mail valido
        </p>
        <input type="text" placeholder="Nombre completo" className="peer border border-slate-400" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <p className="invisible peer-invalid:visible text-red-700 font-light">
          Ingrese su nombre
        </p>
        <input type="number" placeholder="Telefono" className="peer border border-slate-400" value={tel} onChange={(e) => setTel(e.target.value)}/>
        <p className="invisible peer-invalid:visible text-red-700 font-light">
          Ingrese su telefono
        </p>
        <input type="text" placeholder="Dirección" className="peer border border-slate-400" value={dir} onChange={(e) => setDir(e.target.value)}/>
        <p className="invisible peer-invalid:visible text-red-700 font-light">
          Ingrese su dirección
        </p>
      </div>
      {!validator ||
        (<h2 className="text-red-700 font-semibold">
          Se requiere completar todos los campos para enviar el pedido
        </h2>)
      }
      <div className="px-4 py-4 flex justify-center">
        <Link 
          to={'/cart'}
          className={"px-6 py-3 mr-6 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 " + (darkMode ? "text-white" : "text-slate-900 bg-white")}
        >
          Volver al carrito
        </Link>
        <button 
          onClick={handleFirebase}
          className={"px-6 py-3 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 " + (darkMode ? "text-white" : "text-slate-900 bg-white")}
        >
          Enviar pedido
        </button>
      </div>
    </div>
  )
}
