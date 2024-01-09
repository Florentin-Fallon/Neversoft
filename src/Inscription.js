import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Inscription() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-cover bg-center bg-local overflow-hidden bg-[url('./Assets/inscription.jpg')]">
        <div className="h-screen flex flex-col justify-center items-center ">
          <h2 className='text-white text-center text-4xl '>Rejoignez notre club !</h2>
          <div>
            <p className='text-white text-center text-xl mt-8'>
              Apprenez-en plus sur notre club en vous inscrivant !
            </p>
            <a href={require('./Assets/Fiche-inscription.pdf')} download="inscription.pdf" className='text-white flex justify-center mt-6'>
              <button className='w-80 h-[45px] bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 my-8'>Téléchargez la fiche d'inscription</button>
            </a>
            <p className='text-white text-center text-xl mt-8'>Envoyez-nous votre fiche d'inscription complétée par email à : <a href="mailto:club.neversoft@gmail.com">club.neversoft@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Inscription;
