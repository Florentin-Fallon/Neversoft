import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maintenance from './components/Maintenance'

function Contact() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
          <Maintenance 
          text={'La page contact'} 
          />
        </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact