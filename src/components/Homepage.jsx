import React from 'react'

const Homepage = () => {
  return (
     <div className=''>
        <div className=' w-full h-screen flex flex-col justify-between homepage px-10 pb-10' >
            <img className='absolute left-0 w-full h-screen object-cover z-[-10]' src="/assets/homepage.jpg" alt="" />
            <div className=' pt-10'> 
                <h1 className=' text-7xl text-white lg:text-9xl'>Nike</h1>
                <h1 className=' text-7xl text-white lg:text-9xl'>Air</h1>
                <img className=' h-20 lg:h-28' src="/assets/nike1.png" alt="" />
            </div>

            <div className=' flex flex-col text-white'>
                <div>
                    <h1 className=' text-xs'>Price</h1>
                    <h1 className=' text-xl'>$199</h1>
                </div>
                 <div className=' flex items-center justify-between text-white'>
                    <a className=' text-sm border-2 border-white px-4 py-2 rounded-xl' href="">Add to Cart</a>
                    <div>
                        <h1 className=' text-2xl lg:text-4xl'>30%</h1>
                        <h1 className=' text-red-600 text-2xl lg:text-4xl'>Off</h1>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Homepage
