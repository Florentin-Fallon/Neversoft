import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Boutique() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <h2 className='text-white'>Salut vous êtes sur la page Boutique</h2>
        <Link to="/" className='text-white'>Retour à l'accueil</Link>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Boutique