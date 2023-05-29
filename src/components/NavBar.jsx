import React, { useContext }  from 'react';
import DropdownCategory from './DropdownCategory';
import LateralMenu from './LateralMenu'; 
import CartWidget from './CartWidget';
import AvatarWidget from './AvatarWidget'; 
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import '../style-extended.css';
import Search from './Search';

export default function NavBar() {

  const {darkMode, setDarkMode} = useContext(generalContext);

  return (
    <>

      <nav className={"fixed top-0 w-full border-2 " + (darkMode ? "bg-neutral-800" : "bg-white")}>

        <div className="px-4 lg:px-20">
          <div className="flex h-16 items-center justify-between">

            <LateralMenu />

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

              <DropdownCategory />

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

              <Link className="ml-1" to={"/cart"}>
                <CartWidget />
              </Link>

              <AvatarWidget />

            </div>
          </div>
        </div>

      </nav>

    </>
  )
}
