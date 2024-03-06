'use client';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Gallery() {
    const [imageFullVisible, setImageFullVisible] = useState(false);
    const classFullImage = `${imageFullVisible ? '' : 'hidden'}`;
    const [images] = useState(['/fondo_8.jpg', '/fondo_10.png', '/fondo_11.png', '/fondo2.jpeg', '/fondo4.jpeg', '/novios_prueba.png',
        '/background1.jpg', '/background2.jpg']);
    const [indexImage, setIndexImage] = useState(0);
    const [swiper, setSwiper] = useState(null); // Agrega el estado para el objeto swiper

    /*useEffect es un hook que recibe como parámetros una función callback y las dependencias.
    Y ejecuta el código que está dentro de la función cada vez que se renderiza el componente (es decir,
    cada vez que el componente muestre elementos en el DOM)
    
    En el segundo parametro recibe un array [], que ponemos la variable que cada vez que cambie su estado,
    se ejecutará el useEffect.*/

    useEffect(() => {
        // Utiliza useEffect para actualizar el prop initialSlide del Swiper
        // cada vez que indexImage cambie
        if (indexImage >= 0 && indexImage <= 7) {
            // Asegúrate de que el valor de indexImage sea válido
            swiper && swiper.slideTo(indexImage);
        }


    }, [indexImage, swiper]);

    function toggleFullImage(index) {
        setImageFullVisible(!imageFullVisible);
        setIndexImage(index);
    }

    function advanceButton() {
        if (indexImage < 7) {
            setIndexImage(prevIndex => prevIndex + 1);
        } else {
            setIndexImage(0);
        }
    }

    function backButton() {
        if (indexImage > 0) {
            setIndexImage(prevIndex => prevIndex - 1);
        } else {
            setIndexImage(7);
        }
    }

    return (
        <>
            <section className="bg-[url('../public/background1.jpg')] bg-cover bg-no-repeat p-5 mt-5" id="gallery">
                <h2 className="text-center my-5">Galería de fotos</h2>
                <div className="space-y-7 flex items-center flex-col bg-white py-10 md:space-y-0 md:grid md:place-items-center md:grid-cols-4 md:p-10 md:gap-5">
                    <img src="/fondo_8.jpg" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(0)} />
                    <img src="/fondo_10.png" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(1)} />
                    <img src="/fondo_11.png" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(2)} />
                    <img src="/fondo2.jpeg" alt="" className="w-9/12  md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(3)} />
                    <img src="/fondo4.jpeg" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(4)} />
                    <img src="/novios_prueba.png" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(5)} />
                    <img src="/background1.jpg" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(6)} />
                    <img src="/background2.jpg" alt="" className="w-9/12 md:w-72 md:h-72 border-4 border-yellow-500 transition-all ease-in-out delay-75 hover:scale-110 cursor-pointer" onClick={() => toggleFullImage(7)} />
                </ div>
            </section >
            <div className={`${classFullImage} bg-black bg-opacity-30 p-5 fixed left-0 right-0 bottom-0 top-0 mx-auto`}>
                <div>
                    <button className="border-2 border-black transition-all ease-in-out delay-100 hover:border-white hover:text-white" onClick={toggleFullImage}>
                        <svg className="h-10 w-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex justify-around mb-3">
                    <button className="border-2 border-black transition-all ease-in-out delay-100 hover:border-white hover:text-white" onClick={backButton}>
                        <svg className="h-10 w-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                    </button>
                    <button className="border-2 border-black transition-all ease-in-out delay-100 hover:border-white hover:text-white" onClick={advanceButton}>
                        <svg className="h-10 w-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        initialSlide={indexImage}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >

                        {
                            /**El map me permite navegar entre la galería de imagenes de forma dinámica */
                            images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} className="md:mx-auto md:h-96 md:w-96" alt={`Slide ${index}`} />
                                    <div>
                                        <p className="text-center text-white font-bold">Imagen {index + 1} de {images.length}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}