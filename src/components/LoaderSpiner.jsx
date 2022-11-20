import React, { useContext }  from 'react'
import { generalContext } from './ContextContainer';

export default function LoaderSpiner() {

  const {darkMode} = useContext(generalContext);

  return (
    <div className="h-screen"
      style={{
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      LoaderSpiner
    </div>
  )
}
