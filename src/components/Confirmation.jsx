import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function Confirmation() {

  const { darkMode } = useContext(generalContext);

  const { idOrder } = useParams();

  return (
    <div
        className={"pt-20 " + (darkMode ? "bg-neutral-800" : "bg-gray-100")}
    >
        <h2>ID DEL PEDIDO: {idOrder}</h2>
    </div>
  )
}
