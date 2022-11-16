import React, { useContext } from 'react';
import { generalContext } from './ContextContainer';

export default function CartWidget() {

  const { totalProducts } = useContext(generalContext);

  return (
    <>
    <div>🛒</div>
    <span>{totalProducts() || ''}</span>
    </>
  )
}
