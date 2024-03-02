import React from 'react';
import {
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
                <a href='https://www.tiktok.com/@club.neversoft?_t=8kLPAR9xgfo&_r=1' target='_blank' rel='noopener noreferrer'>
                    <FaTiktok className='pl-4' size={35} />
                </a>
                <a href='https://www.instagram.com/club_neversoft?igshid=djlya2c5ZmZjeXJt&utm_source=qr' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram className='pl-4' size={35} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
