import React from 'react'
import { useParams } from 'react-router-dom';

export default function Confirmation() {

  const { idOrder } = useParams();

  return (
    <div
        className={"text-center font-semibold pt-20"}
    >
        <h2 >ID DEL PEDIDO: {idOrder}</h2>
    </div>
  )
}
