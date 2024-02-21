import React from 'react'

function Maintenance({
    text
}) {
  return (
    <div className="text-white bg-cover bg-center bg-local overflow-hidden bg-[url('./Assets/maintenance.webp')]">
        <div className='items-center mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>{text} est en cours de maintenance</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-xl sm:text-xl text-xl'>Le site sera bientôt disponible. Merci de votre patience !</p>
            </div>
        </div>
        
    </div>
  )
}

export default Maintenance