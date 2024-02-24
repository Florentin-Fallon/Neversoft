import React from 'react';
import Navbar from './components/Navbar';
import Profil from './components/Profil';
import Footer from './components/Footer';

function Team() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
            <h2 className='text-white text-center text-4xl my-8'>Notre Club</h2>
            <div className='flex justify-center align-middle flex-wrap'>
            <div className='flex mx-4 mb-8'>
                    <Profil
                    imgS={require('./Assets/flo.webp')}
                    imgA={"Président"}
                    title={"Florentin"}
                    description={"Président, entraîneur"}
                    />
                </div>
                <div className='flex mx-20 mb-8'>
                    <Profil
                    imgS={require('./Assets/mathias.webp')}
                    imgA={"Vice-Président"}
                    title={"Mathias"}
                    description={"Vice-Président, entraîneur"}
                    />
                </div>
                <div className='flex mx-4 mb-8'>
                    <Profil 
                    imgS={require('./Assets/laura.jpeg')}
                    imgA={"Trésorière"}
                    title={"Laura"}
                    description={"Trésorière,secrétaire"}
                    />
                </div>
            </div>
            <div>
                <h2 className='text-white text-center text-3xl mt-6'>Notre Histoire</h2>
                <div className='text-white text-center align-middle mx-24 border border-white p-4 rounded-lg mt-4'>
                    <p >
                        Passionné d'airsoft depuis mes 12 ans, je suis devenu le président du club. 
                        Aux côtés de Mathias, vice-président, et de Laura, en tant que trésorière et secrétaire. 
                        Notre club fusionne entre la passion, l'amitié et l'esprit d'équipe. 
                        Ensemble, nous écrivons une histoire où l'airsoft va au-delà du simple jeu pour devenir une véritable communauté unie. 
                        Nous accueillons autant les débutants que les confirmés.
                    </p>
                </div>
            </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
