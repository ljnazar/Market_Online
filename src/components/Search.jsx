import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {

  const [search, setSearch] = useState('');

  return (

    <div className="relative hidden md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Link to={!search || `/search/${search}`}>
                <svg  className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </Link>
        </div>

        {/* AGREGAR EVENTO DE APRETAR ENTER */}

        <input className="w-60 px-2 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notebook, Mouse, Parlante..." value={search} onChange={(e) => setSearch(e.target.value)} required />

    </div>


  )
}
