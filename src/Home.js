import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Card from './components/Card';
import Footer from './components/Footer';
import SimpleCarousel from './components/SimpleCarousel';

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
          imgSrc="https://img.20mn.fr/y0SnXswAR1aNWDdLDnLukQ/1444x920_homme-participe-partie-airsoft-republique-tcheque-illustration"
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
        <SimpleCarousel 
        title={"Nos Partenaires"}
        imgSrc={"https://picsum.photos/200/300.jpg"}
        imgAlt={"Générale Airsoft"}
        imgSrc2={"https://www.terre.tv/wp-content/uploads/2022/12/media-pratiquer-pourquoi-1024x683.jpg"}
        imgAlt2={"Airsoft France"}
        imgSrc3={"https://picsum.photos/200/300"}
        imgAlt3={"Airsoft Europe"}
        imgSrc4={"https://picsum.photos/200/300/?blur"}
        imgAlt4={"Airsoft International"}
        imgSrc5={"https://picsum.photos/200/300?grayscale"}
        imgAlt5={"Airsoft World"}
        />
      </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}

export default Home