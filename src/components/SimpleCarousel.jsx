import React from 'react'

function SimpleCarousel({
  title,
  imgSrc,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgAlt,
  imgAlt2,
  imgAlt3,
  imgAlt4,
  imgAlt5,
}) {
  return (
    <div>
      <h1 className='text-white text-center text-3xl mt-16 mb-24'>{title}</h1>
        <div className='flex flex-wrap justify-center'>
        <img src={imgSrc} alt={imgAlt}   className='w-64 h-64 bg-no-repeat ml-4 mb-4 rounded-xl transition duration-300 transform hover:scale-110'/>
        <img src={imgSrc2} alt={imgAlt2} className='w-64 h-64 bg-no-repeat ml-4 mb-4 rounded-xl transition duration-300 transform hover:scale-110'/>
        <img src={imgSrc3} alt={imgAlt3} className='w-64 h-64 bg-no-repeat ml-4 mb-4 rounded-xl transition duration-300 transform hover:scale-110'/>
        <img src={imgSrc4} alt={imgAlt4} className='w-64 h-64 bg-no-repeat ml-4 mb-4 rounded-xl transition duration-300 transform hover:scale-110'/>
        <img src={imgSrc5} alt={imgAlt5} className='w-64 h-64 bg-no-repeat ml-4 mb-4 rounded-xl transition duration-300 transform hover:scale-110'/>
    </div>
    </div>
  )
}

export default SimpleCarousel