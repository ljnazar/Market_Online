import React, {useState, useEffect} from 'react';

export default function ItemCount({stockProduct}) {

  const initialStock = stockProduct;

  const [stock, setStock] = useState(initialStock);

  const [count, setCount] = useState(0);

  const stockChange = (simbol) => {

    if(stock > 0 && stock < initialStock){
      //console.log("Hay stock");
      if(simbol === "+"){
        setCount(count + 1);
        setStock(stock - 1);
      }else{
        setCount(count - 1);
        setStock(stock + 1);
      }
    }else if(stock === 0){
      //console.log("No hay stock");
      if(simbol === "-"){
        setCount(count - 1);
        setStock(stock + 1);
      }
    }else if(stock === initialStock){
      if(simbol === "+"){
        setCount(count + 1);
        setStock(stock - 1);
      }
    }
  };

  useEffect( () => {
    console.log("modified stock");
  },[stock]);

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

    </div>

  )
}
