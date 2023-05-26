import React, { useState, useContext }  from 'react';
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import '../style-extended.css';
import Search from './Search';

export default function NavBar() {

  const {darkMode, setDarkMode} = useContext(generalContext);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape'){
      setIsOpenDropdown(false);
    }
  }

  document.addEventListener('keydown', handleEscape);

  return (
    <>

      <nav className={"fixed top-0 w-full border-2 " + (darkMode ? "bg-neutral-800" : "bg-white")}>

        <div className="px-4 lg:px-20">
          <div className="flex h-16 items-center justify-between">

            <input type="checkbox" onChange={() => setIsOpenBurger(!isOpenBurger)} checked={isOpenBurger} className="toggler block sm:hidden" />
            <div className="hamburger block sm:hidden">
              <div className="block sm:hidden"></div>
            </div>
            <div className="menu absolute inset-0 block sm:hidden">
                <div>
                    <ul className="w-48 ml-4">
                        <li className="border-t-2 font-semibold"><Link to={"/"} onClick={() => setIsOpenBurger(!isOpenBurger)} className="inline-flex">
                          <svg className="mr-2 mt-1.5 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                          Inicio
                        </Link></li>
                        <li className="border-t-2 border-b-2 font-semibold inline-flex">
                          Categorias
                          <svg className="ml-2 mt-1.5 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </li>
                        <li className="ml-3"><Link to={"/category/Auriculares"} onClick={() => setIsOpenBurger(!isOpenBurger)}>Auriculares</Link></li>
                        <li className="ml-3"><Link to={"/category/Parlantes"} onClick={() => setIsOpenBurger(!isOpenBurger)}>Parlantes</Link></li>
                        <li className="ml-3"><Link to={"/category/Monitores"} onClick={() => setIsOpenBurger(!isOpenBurger)}>Monitores</Link></li>
                        <li className="ml-3"><Link to={"/category/Notebooks Consumo"} onClick={() => setIsOpenBurger(!isOpenBurger)}>Notebooks</Link></li>
                        <li className="ml-3"><Link to={"/category/PC de Escritorio"} onClick={() => setIsOpenBurger(!isOpenBurger)}>PCs</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex">

              <Link to={"/"}>
                <div className="ml-8 sm:ml-0 flex">
                  <img
                    className="block h-10 w-10 rounded-full border-white border-2"
                    src="/logo.webp"
                    alt="logo"
                  />
                  <h1 className={"pl-2 pr-4 text-3xl font-bold border-r-2 " + (darkMode ? "text-neutral-100" : "text-gray-800")}>OFICOM</h1>
                </div>
              </Link>

              <div className="hidden sm:ml-2 sm:block">

                <button 
                  className={"z-10 px-3 py-1.5 rounded-md hover:bg-gray-600 hover:text-white font-semibold inline-flex " + (darkMode ? "bg-neutral-800 text-white" : "bg-white text-gray-800")} 
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                  Categorias 
                  <svg className="ml-2 mt-1.5 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <button 
                  className={isOpenDropdown ? "fixed inset-0 h-full w-full bg-black opacity-50 cursor-default" : ""}
                  onClick={() => setIsOpenDropdown(false)}
                >
                </button>

                <div className={isOpenDropdown ? "absolute mt-2 bg-white rounded-md shadow-xl" : "hidden"}>
                  <Link 
                    onClick={() => setIsOpenDropdown(false)}
                    to={"/category/Auriculares"}
                    className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold"
                  >
                    Auriculares
                  </Link>
                  <Link 
                  onClick={() => setIsOpenDropdown(false)}
                  to={"/category/Parlantes"}
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold"
                  >
                    Parlantes
                  </Link>
                  <Link 
                  onClick={() => setIsOpenDropdown(false)}
                  to={"/category/Monitores"}
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" 
                  >
                    Monitores
                  </Link>
                  <Link 
                  onClick={() => setIsOpenDropdown(false)}
                  to={"/category/Notebooks Consumo"}
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" 
                  >
                    Notebooks
                  </Link>
                  <Link 
                  onClick={() => setIsOpenDropdown(false)}
                  to={"/category/PC de Escritorio"}
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" 
                  >
                    PCs
                  </Link>
                </div>

              </div>

            </div>

            <div className="flex items-center">

              <Search />

              <button className="w-7 h-7 ml-3" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ?
                  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 20 20" fill="#FFFFFF">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>)
                  :
                  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="#000000">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>)
                }
              </button>

              <button className="ml-1">
                <Link to={"/cart"}>
                  <CartWidget />
                </Link>
              </button>

              <button type="button" className="ml-3 mr-2 max-w-xs items-center rounded-full ring-1 ring-offset-1 ring-offset-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </button>

            </div>
          </div>
        </div>

      </nav>

    </>
  )
}
