import React, { useContext } from 'react'
import { generalContext } from './ContextContainer';

export default function LoaderSkeleton() {

  const {darkMode} = useContext(generalContext);

  return (
    <div
      className={"pt-20 flex justify-center flex-wrap " + (darkMode ? "bg-neutral-800" : "bg-gray-100")}
    >

      {[...Array(8)].map(() =>
        (<div className="flex flex-col justify-evenly w-60 mx-8 my-6 border">
          <div className="p-4 bg-white shadow">
            <div className="animate-pulse flex flex-col">
              <div className="rounded w-full h-52 bg-gray-200" />
              <div className="flex flex-col items-center mt-5">
                <div className="mt-2 w-52 h-3 bg-gray-200 rounded" />
                <div className="mt-2 w-48 h-3 bg-gray-200 rounded" />
                <div className="mt-4 w-40 h-3 bg-gray-200 rounded" />
                <div className="mt-4 w-28 h-3 bg-gray-200 rounded" />
                <div className="mt-4 mb-4 w-20 h-3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>)
      )}

    </div>
  )
}