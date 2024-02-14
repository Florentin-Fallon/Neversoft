import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] flex mx-auto pt-12 pb-4 px-4 mt-24 lg:grid-cols-3 gap-8 text-white text-center justify-center'>
        <div>
            <h1 className='w-full text-3xl font-bold text-white'>Neversoft</h1>
            <p className='text-center pt-4'>Bienvenue chez Neversoft, le club d'airsoft où la passion et l'action se rejoignent pour créer des moments inoubliables. 
            Plongez dans notre communauté dédiée à l'excitation tactique et à la camaraderie.
            </p>
                <div className='flex md:w-[75%] my-6 justify-center mx-36'>
                    <FaFacebookSquare className='pl-4' size={35} />
                    <FaInstagram className='pl-4' size={35} />
                    <FaTiktok className='pl-4' size={35} />
                </div>
        </div>
    </div>
  );
};

export default Footer;