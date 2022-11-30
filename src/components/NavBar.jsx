import React, { useState, useContext }  from 'react';
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import '../style-extended.css';
import Search from './Search';

export default function NavBar() {

  const {darkMode, setDarkMode} = useContext(generalContext);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape'){
      setIsOpenDropdown(false);
    }
  }

  //const [isOpenBurger, setIsOpenBurger] = useState(false);

  document.addEventListener('keydown', handleEscape);

  return (
    <>


      <nav className={"fixed top-0 w-full border-2 " + (darkMode ? "bg-neutral-800" : "bg-white")}>

        <div className="px-14 lg:px-20">
          <div className="flex h-16 items-center justify-between">


            <input type="checkbox" className="toggler block sm:hidden" />
            <div className="hamburger  block sm:hidden">
              <div className="block sm:hidden"></div>
            </div>
            <div className="menu absolute inset-0">
                <div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>

              
            <div className="flex border-r-2 sm:border-0">


              {/* <button type="button" onClick={() => setIsOpenBurger(!isOpenBurger)}>
                <svg width="40px" height="40px" viewBox="0 0 50 50" id="emoji" xmlns="http://www.w3.org/2000/svg">
                  <g id="line">
                    <line x1="10" x2="40" y1="15" y2="15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line x1="10" x2="40" y1="25" y2="25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line x1="10" x2="40" y1="35" y2="35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                  </g>
                </svg>
              </button>
              <div className={isOpenBurger ? "px-4 py-3" : "hidden"}>
                <Link className="block font-semibold hover:border px-2 py-1 rounded">Home</Link>
                <Link className="block font-semibold hover:border-2 px-2 py-1 rounded">Category</Link>
                <Link className="block font-semibold hover:border-2 px-2 py-1 rounded">Checkout</Link>
                <Link className="block font-semibold hover:border-2 px-2 py-1 rounded">Etc</Link>
              </div> */}



              <Link to={"/"}>
                <div className="flex">
                  <img
                    className="block h-10 w-10 rounded-full border-white border-2"
                    src="/logo.webp"
                    alt="logo"
                  />
                  <h1 className={"px-2 text-3xl font-bold " + (darkMode ? "text-neutral-100" : "text-gray-800")}>OFICOM</h1>
                </div>
              </Link>
             
              <div className="hidden sm:ml-4 sm:block">

                <button 
                  className={"z-10 mt-1 px-3 py-1.5 rounded-md hover:bg-gray-600 hover:text-white text-sm font-semibold inline-flex " + (darkMode ? "bg-neutral-800 text-white" : "bg-white text-gray-800")} 
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                  Categorias 
                  <svg className="ml-2 mt-1 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" to={"/category/Parlantes"}
                  >
                    Parlantes
                  </Link>
                  <Link 
                  onClick={() => setIsOpenDropdown(false)}
                  className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" to={"/category/Monitores"}
                  >
                    Monitores
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

              <button className="ml-1 flex">
                <Link to={"/cart"}>
                  <CartWidget />
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link className=" block px-3 py-2 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-medium" to={"/category/Auriculares"}>
              Auriculares
            </Link>
            <Link className="block px-3 py-2 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-medium" to={"/category/Parlantes"}>
              Parlantes
            </Link>
            <Link className="block px-3 py-2 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-medium" to={"/category/Monitores"}>
              Monitores
            </Link>
          </div>
        </div> */}
      </nav>

    </>
  )
}
