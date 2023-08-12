import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' px-2 pt-4'>
        <div className=' flex flex-row items-center justify-center bg-[#008CFF] px-2 py-20 rounded-xl gap-10 lg:gap-20'>
            <img className=' h-[100px] lg:h-[300px]' src="/assets/nike1.png" alt="" />
            <div className=' flex flex-col items-center gap-4 text-white'>
                <div className=' flex flex-col items-center gap-1'>
                    <a className=' text-sm' href="">About Us</a>
                    <a className=' text-sm' href="">Contact</a>
                    <a className=' text-sm' href="">Shipping</a>
                    <a className=' text-sm' href="">FAQs</a>
                </div>
                <div className=' flex flex-row items-center justify-center gap-4'>
                    <AiFillFacebook size={20}/>
                    <AiFillInstagram size={20}/>
                    <AiFillTwitterCircle size={20}/>
                </div>
            </div>
        </div>
        <h1 className=' pt-10 pb-4 text-[10px] text-center'>2023 ©Ecommerce - By D4rzDev - ALL RIGHTS RESERVED </h1>
    </div>
  )
}

export default Footer