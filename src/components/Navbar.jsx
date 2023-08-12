import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import {CiSearch} from 'react-icons/ci'
import {VscClose} from 'react-icons/vsc'
import { useCart } from '../CartContext'

const Navbar = () => {

    const [nav, setNav] = useState();
    const [carts, setCart] = useState();
    const { cart } = useCart();
    const {removeFromCart, getTotalPrice} = useCart();

    const handleCart =() => {
      setCart(!carts)
    }

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <nav className=' relative'>
        <div className=' flex flex-row items-center justify-between px-6 py-4'>
            <img className=' h-12' src="/assets/nike2.png" alt="" />

            <ul className=' hidden gap-4 text-xs lg:flex'>
              <a className=' text-center' href="">Men</a> 
              <a className=' text-center' href="">Women</a> 
              <a className=' text-center' href="">Kids</a> 
              <a className=' text-center' href="">Brand</a> 
              <a className=' text-center' href="">Sales</a>
            </ul>
            
            <div className=' flex items-center justify-center gap-4 '>
              <div className=' hidden flex-row items-center justify-center lg:flex'>
                <input className=' bg-transparent text-sm font-mono py-1 px-2 border-2 border-black rounded-2xl' type="text" placeholder='Search' />
                <CiSearch size={20}/>
              </div>

               <div className=' flex' onClick={handleCart}>
                  <BsFillBagFill size={20}/>
                  <h1 className=' bg-red-700 text-[8px] text-white h-3 w-3 text-center rounded-full' href="">{cart.length}</h1>
                </div>
                <a className=' hidden text-center text-sm text-white px-6 py-2 bg-black rounded-xl lg:flex' href="">Sign Up</a>

                <div className=' lg:hidden' onClick={handleNav}>
                    {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                </div>
                
            </div>
        </div>

        <ul className={!nav ? 'hidden' : ' navbar absolute flex justify-center w-screen h-screen px-4'}>
          <div className=' flex flex-col gap-2'>
            <a className=' text-center' href="">Men</a> 
            <a className=' text-center' href="">Women</a> 
            <a className=' text-center' href="">Kids</a> 
            <a className=' text-center' href="">Brand</a> 
            <a className=' text-center' href="">Sales</a>

            <div className=' flex flex-row items-center justify-center pt-4'>
                <input className=' bg-transparent text-sm font-mono py-2 px-2 border-2 border-black rounded-xl' type="text" placeholder='Search' />
                <CiSearch size={20}/>
            </div>

            <a className=' text-center text-sm mt-10 w-[200px] text-white  py-3 bg-black rounded-xl' href="">Sign Up</a>
          </div>
        </ul>

        <div className={!carts ? 'hidden' : ' cart absolute right-0 pt-4 pb-4 px-2 text-black bg-white'}>
          <div className='flex flex-col items-center gap-4 h-screen w-[200px]'>
            <div className='max-h-[70vh] overflow-y-auto'>
              {cart.map((cartItem) => (
                <div className='flex flex-row items-center gap-4 pb-4' key={cartItem.product.id}>
                  <img className='h-[50px] w-[50px] rounded-full' src={cartItem.product.img} alt='' />
                  <div className='flex flex-col items-start pr-4'>
                    <h1 className='text-xs font-normal'>{cartItem.product.name}</h1>
                    <h1 className='text-sm font-bold'>${cartItem.product.price}</h1>
                    <h1 className='text-[8px] font-light'>Quantity: {cartItem.quantity}</h1>
                  </div>
                  <VscClose className=' text-start' onClick={() => removeFromCart(cartItem)} size={15} />
                </div>
              ))}
            </div>
            <h1 className='text-black font-mono text-xs font-bold pt-6'>Total Amount: ${getTotalPrice().toFixed(2)}</h1>
            <button className='bg-[#008CFF] text-white px-10 py-2 rounded-lg' type='submit'>
              Checkout
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar