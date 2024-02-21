import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maintenance from './components/Maintenance'

function Boutique() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
          <Maintenance 
          text={"La boutique"}
          />
        </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Boutique