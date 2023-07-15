import React from 'react'

const Movies = () => {
  return (
    <div className='p-5'>
      <div className='text-center font-bold text-2xl m-5'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around gap-8'>
        <div className='h-[40vh] w-[200px] rounded-xl bg-center bg-cover hover:scale-110 transition-transform duration-300 hover:cursor-pointer'
          style={{
            backgroundImage :`url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`
          }}>

        </div>
      </div>
    </div>
  )
}

export default Movies