import React from 'react'

function Licence({
  nameLicence,
  textOne,
  textTwo,
  textThree,
  price
}) {
  return (
    <div className='flex flex-col border-solid bg-white w-[17rem] h-auto rounded-lg m-px'>
      <p className='text-black text-2xl text-center pb-4 pt-4'>{nameLicence}</p>
      <div>
        <p className='text-black font-semibold text-center pb-2'> Droits inclus :</p>
        <p className='text-black text-sm text-center'>{textOne}</p>
        <p className='text-black font-semibold text-center pt-4 pb-2'> Assurance :</p>
        <p className='text-black text-sm text-center'>{textTwo}</p>
        <p className='text-black font-semibold text-center pt-4 pb-2'> Avantages supplémentaires :</p>
        <p className='text-black text-sm text-center'>{textThree}</p>
        <div className='flex flex-col'>
          <button className='text-center text-sm w-[50%] rounded-lg bg-blue-700 hover:bg-blue-500 text-white m-auto p-1 mt-10 mb-2'>{price}</button>
        </div>
      </div>
    </div>
  )
}

export default Licence