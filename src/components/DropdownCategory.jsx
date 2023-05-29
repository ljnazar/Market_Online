import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function AvatarWidget() {

    const {darkMode} = useContext(generalContext);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const handleEscape = (e) => {
        if (e.key === 'Esc' || e.key === 'Escape'){
        setIsOpenDropdown(false);
        }
    }

    document.addEventListener('keydown', handleEscape);

    return (
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
    )
}
