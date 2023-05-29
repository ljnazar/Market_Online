import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AvatarWidget() {

    const [isOpenAvatar, setIsOpenAvatar] = useState(false);

    const handleEscape = (e) => {
        if (e.key === 'Esc' || e.key === 'Escape'){
            setIsOpenAvatar(false);
        }
    }

    document.addEventListener('keydown', handleEscape);

    return (
        <div>
            <button 
                type="button" 
                className="z-10 ml-3 mr-2 max-w-xs items-center rounded-full ring-1 ring-offset-1 ring-offset-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                onClick={() => setIsOpenAvatar(!isOpenAvatar)}
            >
                <img className="h-8 w-8 rounded-full" src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg" alt=""/>
            </button>
            <button 
                className={isOpenAvatar ? "fixed inset-0 h-full w-full bg-black opacity-50 cursor-default" : ""}
                onClick={() => setIsOpenAvatar(false)}
            >
            </button>
            <div className={isOpenAvatar ? "absolute mt-2 bg-white rounded-md shadow-xl" : "hidden"}>
                <Link 
                onClick={() => setIsOpenAvatar(false)}
                to={"/login"}
                className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold"
                >
                Loguearse
                </Link>
                <Link 
                onClick={() => setIsOpenAvatar(false)}
                to={"/register"}
                className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold"
                >
                Registrarse
                </Link>
                <Link 
                onClick={() => setIsOpenAvatar(false)}
                className="block px-6 py-1.5 text-gray-800 hover:bg-gray-600 hover:text-white rounded-md text-sm font-semibold" 
                >
                Salir
                </Link>
            </div>
        </div>
    )
}
