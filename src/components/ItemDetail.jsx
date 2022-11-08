import React from 'react'

export default function ItemDetail({productDetail}) {
  return (
    <div>
    {productDetail ? (
      <>
        {`Id: ${productDetail.cod_alfa} - Category: ${productDetail.categoria} - Name: ${productDetail.detalle} - Price: ${productDetail.precio}`}
      </>
    ) : (
      <>Loading...</>
    )}
</div>
  )
}
