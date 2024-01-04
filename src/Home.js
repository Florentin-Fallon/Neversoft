import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Card from './components/Card';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
    <div>
      <LandingPage />
    </div>
    <div className='flex justify-center align-middle flex-wrap'>
      <div className='flex mx-4 mb-4'>
        <Card 
          imgSrc="http://www.sport-et-aventure.fr/wp-content/uploads/2016/01/image-une-airsoft.jpg"
          imgAlt="L'Airsoft"
          title="L'Airsoft"
          buttonText="En savoir plus"
          link={"/airsoft"}
        />
      </div>
      <div className='flex mx-24 mb-4'>
        <Card
        imgSrc="https://cdn.shopify.com/s/files/1/0632/3064/0340/files/joueur-replique-airsoft_b69c76c6-c4cb-41c0-be3a-6fc5db511118_480x480.jpg?v=1675957691"
        imgAlt="La sécurité"
        title="La sécurité"
        buttonText="En savoir plus"
        link={"/securite"}
        />
      </div>
      <div className='flex mx-4 mb-4'>
        <Card
        imgSrc="https://www.terre.tv/wp-content/uploads/2022/12/media-pratiquer-pourquoi-1024x683.jpg"
        imgAlt="Les avantages"
        title="Les avantages"
        buttonText="En savoir plus"
        link={"/avantages"}
        />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
  )
}

export default Home