import React from 'react'

const Pagination = ({ page , handleNext , handlePrev }) => {
  return (
    <div className='flex justify-center py-4 my-8 bg-gray-400'>
        <div onClick={handlePrev} className='mx-4 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='mx-4'>{page}</div>
        <div onClick={handleNext} className='mx-4 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination