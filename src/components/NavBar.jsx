import React from 'react';
import CartWidget from './CartWidget'; 
import '../output.css';
import logo from '../logo.webp'
import { Link } from 'react-router-dom';

export default function NavBar({ button , color}) {

  /*const functionLogin = () => {
    console.log("Login");
  };*/ 

  return (
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/*
              Icon when menu is closed.
              Heroicon name: outline/bars-3
              Menu open: "hidden", Menu closed: "block"
            */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*
              Icon when menu is open.
              Heroicon name: outline/x-mark
              Menu open: "block", Menu closed: "hidden"
            */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <img
                    className="block h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link className="bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/pc"}>
                    PCs de Escritorio
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/notebooks"}>
                    Notebooks
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/monitores"}>
                    Monitores
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/:idCategory"}>
                    CATEGORIA
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/item/:idItem"}>
                    ITEM
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/checkout"}>
                    PAGO
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-100 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div>🔎</div>
              </button>
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <CartWidget />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="../../public/index.html"
              className="bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Desktop PC
            </a>
            <a
              href="../../public/index.html"
              className="text-gray-800 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Notebooks
            </a>
            <a
              href="../../public/index.html"
              className="text-gray-800 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Impresoras
            </a>
            <a
              href="../../public/index.html"
              className="text-gray-800 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Accesorios
            </a>
          </div>
        </div>
      </nav>

      {/* button ? <button onClick={ () => functionLogin() }>LOGIN</button>: null */}

    </>
  )
}
