import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Licence from './components/Licence';
import NotifyButton from './components/NotifyButton';

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
              <NotifyButton title="Téléchargez la fiche d'inscription" />
            </a>
            <p className='text-white text-center text-xl mt-8'>Envoyez-nous votre fiche d'inscription complétée par email à : <a href="mailto:club.neversoft@gmail.com" className='underline decoration-sky-500 underline-offset-4'>club.neversoft@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className='text-white text-center text-4xl mt-8'>Nos Licences</p>
          <div>
            <p className='text-white text-center mt-4'>Dans notre club, nous aurons 2 licences différentes, les voicis :</p>
          </div>
          <div className='flex justify-center align-middle flex-wrap mt-12'>
          <div className='flex mx-4 mb-4'>
            <Licence 
            nameLicence={"Licence Loisir"}
            textThree={"Patch de l'équipe offert"}
            price={"60€"}
            />
          </div>
          <div className='flex mx-4 mb-4'>
            <Licence 
            nameLicence={"Licence Sportive"}
            text={"Accès aux compétitions"}
            textThree={"Patch de l'équipe offert"}
            price={"85€"}
            />
          </div>
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
