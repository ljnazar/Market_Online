import React, { useContext }  from 'react';
import CartWidget from './CartWidget'; 
import '../output.css';
import logo from '../logo.webp';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function NavBar() {

  const {darkMode, setDarkMode} = useContext(generalContext);

  return (
    <>

      <nav className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-8 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-start">
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

                  <Link className="bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/Auriculares"}>
                    Auriculares
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/Parlantes"}>
                    Parlantes
                  </Link>
                  <Link className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/category/Monitores"}>
                    Monitores
                  </Link>
                </div>
              </div>

            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                className="rounded-full bg-gray-100 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div>🔎</div>
              </button>
              <button className="w-6 ml-2" onClick={() => setDarkMode(!darkMode)}>
                {!darkMode ?
                  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>)
                  :
                  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>)
                }
              </button>

              <button
                type="button"
                className="ml-2 flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <Link to={"/cart"}>
                  <CartWidget />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link className="bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium" to={"/category/Auriculares"}>
              Auriculares
            </Link>
            <Link className="bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium" to={"/category/Parlantes"}>
              Parlantes
            </Link>
            <Link className="bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium" to={"/category/Monitores"}>
              Monitores
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
}
