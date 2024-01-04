import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

function Tarifs() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <h2 className='text-white'>Salut vous êtes sur Tarifs</h2>
        <Link to="/" className='text-white'>Retour à l'accueil</Link>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Tarifs