/**Todos los componentes por defecto son componentes de servidores, tenemos que usar 'use client' para
 * tener interactividad y hacer interacciones con el frontend
*/
'use client';

import { useState } from "react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [classElementClose, setClassElementClose] = useState(false);
    const [classElementOpen, setClassElementOpen] = useState(false);
    const classBtnOpen = `${classElementOpen ? 'hidden' : ''}`;
    const classBtnClose = `${classElementClose ? '' : 'hidden'}`;

    const toggleVisible = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
        setClassElementClose(!classElementClose);
        setClassElementOpen(!classElementOpen);
    };

    function clicked() {
        setClassElementClose(false);
        setClassElementOpen(false);
        setIsVisible(false);
    }

    return (
        <>
            <header className="p-2 flex justify-between items-center md:flex-row-reverse md:w-8/12 md:mx-auto">
                <button className={`${classBtnOpen} border-2 p-1 border-black md:hidden`} id="btnOpen" onClick={toggleVisible}>
                    <svg className="h-8 w-8" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                </button>
                <button id="btnClose" className={`${classBtnClose} relative left-0 border-2 border-black`} onClick={toggleVisible}>
                    <svg className="h-10 w-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <nav className="hidden md:flex space-x-2">
                    <ul className="flex space-x-6">
                        <li><a href="#outfit" className="hover:text-violet-600">Vestimenta</a></li>
                        <li><a href="#gallery" className="hover:text-violet-600">Galería</a></li>
                        <li><a href="#locations" className="hover:text-violet-600">Ubicación</a></li>
                        <li><a href="#" className="hover:text-violet-600">Contacto</a></li>
                    </ul>
                </nav>
                <img src="/logoboda.png" alt="logo" className="hover:rotate-12" />
            </header>
            <nav className="bg-violet-300 py-5 w-screen hidden shadow-[0_h-full_0_0_rgba(0,0,0,0.5)]" id="nav" style={{ display: isVisible ? 'block' : 'none' }}>
                <ul className="space-y-6 flex flex-col text-center">
                    <li><a href="#outfit" className="link-nav hover:text-white transition-all" onClick={clicked}>Vestimenta</a></li>
                    <li><a href="#gallery" className="link-nav hover:text-white transition-all" onClick={clicked}>Galería</a></li>
                    <li><a href="#locations" className="link-nav hover:text-white transition-all" onClick={clicked}>Ubicación</a></li>
                    <li><a href="#" className="link-nav hover:text-white transition-all">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}
