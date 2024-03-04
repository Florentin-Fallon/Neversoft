import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function Securite() {
  return (
    <div className='text-white'>
      <div>
        <Navbar />
      </div>
      <h1 className='text-center text-5xl'>Sécuriter</h1>
      <div className='flex justify-center'>
      <button className='bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-lg mt-12'><Link to="/">Retour</Link></button>
      </div>
    </div>
  )
}

export default Securite