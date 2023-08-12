import React from 'react'

const Section = () => {
  return (
    <div className=' flex flex-row pt-4 px-2 gap-2'>
        <div className='  gap-2'>
            <div>
              <h1 className=' text-sm md:text-lg'>2023 Collections</h1>
            <p className=' text-[8px] md:text-xs '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img className=' h-[230px] pt-4 md:h-[500px] lg:h-[940px]' src="/assets/new1.png" alt="" />
        </div>
         <img className=' h-[300px] md:h-[580px] lg:h-[1000px]' src="/assets/new2.png" alt="" />

    </div>
  )
}

export default Section