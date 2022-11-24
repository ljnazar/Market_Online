import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function ItemCount({ product }) {

  const {darkMode, cart, addProduct} = useContext(generalContext);

  let initialStock = product.stock_total;

  const realStock = () => {
    cart.map(productCart => {
      if(productCart.nombre === product.nombre) {
        initialStock = product.stock_total - productCart.quantity;
      }
    })
  }

  realStock();

  const [stock, setStock] = useState(initialStock);

  const [count, setCount] = useState(0);

  const stockChange = (simbol) => {
    if(count > 0 && count < initialStock){
      if(simbol === "+"){
        setCount(count + 1);
        setStock(stock - 1);
      }else if(simbol === "-"){
        setCount(count - 1);
        setStock(stock + 1);
      }
    }else if (count === 0 && initialStock !== 0){
      if(simbol === "+"){
        setCount(count + 1);
        setStock(stock - 1);
      }
    }else if (count === initialStock && initialStock !== 0){
      if(simbol === "-"){
        setCount(count - 1);
        setStock(stock + 1);
      }
    }
  };

  const onAdd = (quantity) => {
    (!quantity) || addProduct(product, quantity);
  }

  return (

    <div>

      <p className="flex justify-center font-semibold p-2">
        Stock disponible {stock}
      </p>

      <div className="flex justify-center items-baseline p-2">
        <button onClick={() => {stockChange("-")}} className="bg-slate-100 font-bold text-xl relative w-10 h-10 flex items-center justify-center text-black active:bg-black active:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full active:before:bg-teal-400 hover:bg-teal-400">
          -
        </button>
        <span className="px-3 font-bold">
          {count}
        </span>
        <button onClick={() => {stockChange("+")}} className="bg-slate-100 font-bold text-xl relative w-10 h-10 flex items-center justify-center text-black active:bg-black active:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full active:before:bg-teal-400 hover:bg-teal-400">
          +
        </button>
      </div>

      <div className="flex justify-center space-x-2 text-sm font-medium p-2 mb-2">
        <button onClick={() => onAdd(count)} className="px-6 h-12 tracking-wider border border-slate-200 text-slate-900 active:font-bold active:border-2 active:border-black active:before:bg-teal-400 hover:bg-teal-400" type="button">
          <Link style={{pointerEvents: count ? '' : 'none'}} to={!count || '/cart'} className={count ? "font-bold" : "font-semibold"}>
            ADD TO CART
          </Link>
        </button>
        <button className="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
          <svg width={20} height={20} fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>

    </div>

  )
}
