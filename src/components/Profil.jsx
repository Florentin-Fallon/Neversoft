import React from 'react'

const Profil = ({
    imgS,
    imgA,
    title,
    description,
}) => {
  return (
    <div className='bg-white flex flex-col border-solid w-[17rem] h-[22rem] rounded-lg m-px mt-16'>
        <img className='rounded-t-lg w-[64] h-64' src={imgS} alt={imgA} />
        <h1 className='mt-2 text-xl text-center font-semibold'>{title}</h1>
        <p className='text-center text-sm w-[50%] m-auto mt-2'>{description}</p>
    </div>
  )
}

export default Profil