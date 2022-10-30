import React from 'react';
import { useState } from 'react';

export default function ItemCount() {

  const [count, setCount] = useState(0);

  const stockChange = (simbol) => {
    if(simbol === "+"){
      setCount(count + 1);
    }else if(simbol === "-"){
      setCount(count - 1);
    } 
  };

  return (
    <div>
        {/* <button className="font-bold text-2xl" id="btn-increase">-</button>
        <span className="px-3" id="stock">0</span>
        <button className="font-bold text-2xl" id="btn-decrease">+</button> */}
        <div className="flex items-baseline my-6">
            <div className="space-x-3 flex text-sm font-medium" />
            <label>
                <input className="sr-only peer" name="size" type="radio" />
                <div onClick={() => {stockChange("-")}} className="bg-slate-100 font-bold text-xl relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">-</div>
            </label>
            <span className="px-3 font-bold text-lg" id="stock">{count}</span>
            <label>
                <input className="sr-only peer" name="size" type="radio" />
                <button onClick={() => {stockChange("+")}} className="bg-slate-100 font-bold text-xl relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">+</button>
            </label>  
        </div>
    </div>

  )
}
