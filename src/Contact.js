import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Contact() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="text-center text-white w-full mt-24">
        <h1 className="text-4xl font-bold mb-8">Contactez-nous !</h1>
        <p className="text-lg mb-4">Vous pouvez nous contacter par e-mail à l'adresse suivante :</p>
        <a href="mailto:adresse@mail.com" className="text-blue-300 hover:text-blue-100 underline">club.neversoft@gmail.com</a>
      </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact