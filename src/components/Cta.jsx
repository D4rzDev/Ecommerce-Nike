import React from 'react'

const Cta = () => {
  return (
     <div className=' pt-20 px-2'>
        <div className=' cta flex gap-6 flex-col bg-[url("/assets/cta.png")] text-white px-4 py-4 rounded-lg'>
            <div>
                <h1 className=' text-lg'>Shop the Latest Collection</h1>
                <p className=' text-xs'>Discover the perfect pair of shoes for every occasion</p>
            </div>
            <a className=' text-sm border-2 w-fit border-white px-4 py-1 rounded-xl' href="">Explore Now</a>
        </div>

     </div>
  )
}

export default Cta