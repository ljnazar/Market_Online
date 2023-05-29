import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AvatarWidget() {

    const [isOpenBurger, setIsOpenBurger] = useState(false);

    const handleEscape = (e) => {
        if (e.key === 'Esc' || e.key === 'Escape'){
            setIsOpenBurger(false);
        }
    }

    document.addEventListener('keydown', handleEscape);

    return (
        <>
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
        </>
    )
}
