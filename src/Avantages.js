import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function Avantages() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1 className='text-white text-center text-5xl'>Avantages</h1>
      <div className='flex justify-center my-8'>
      <button className='bg-blue-700 hover:bg-blue-500 text-white p-2 px-8 rounded-lg mt-12'><Link to="/">Retour</Link></button>
        </div>
    </div>
  )
}

export default Avantages