import React from 'react'
import { useCart} from '../CartContext'

const Shoes = () => {
    const {addToCart} = useCart();

    const products = [
        { id: 1, img:'/assets/shoes1.jpg', name: 'Nike Air I', price: 199.00 },
        { id: 2, img:'/assets/shoes2.jpg', name: 'Nike Air I', price: 199.00 },
        { id: 3, img:'/assets/green.jpg', name: 'Nike Air I', price: 199.00 },
        { id: 4, img:'/assets/shoes4.jpg', name: 'Nike Air I', price: 199.00 },
      
    ];

  return (
    <div className=' pt-10 px-2'>
        <h1 className=' text-center text-sm pb-6'>Shoes</h1>
        <div className='flex flex-col gap-4 items-center justify-center md:flex-row md:flex-wrap'>
            {products.map((product) => (
                <div key={product.id} className='flex flex-col justify-between gap-6  product1 h-full w-[320px] k rounded-xl text-white px-4 py-4' style={{ backgroundImage: `url(${product.img})` }}>
                    <div className=' flex flex-row items-center justify-between'>
                        <div>
                            <h1 className=' text-xs'>Price</h1>
                            <h1 className=' text-xl'>${product.price}</h1>
                        </div>
                        <div>
                            <h1 className=' text-4xl'>Nike</h1>
                            <h1 className=' text-4xl'>Air</h1>
                            <h1 className=' text-4xl'>I</h1>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <a className=' text-center w-14 px-4 py-4 border-2 border-white rounded-lg' href="">8</a>
                        <a className=' text-center w-14 px-4 py-4 border-2 border-white rounded-lg' href="">9</a>
                        <a className=' text-center w-14 px-4 py-4 border-2 border-white rounded-lg' href="">10</a>
                    </div>

                    <button onClick={() => addToCart(product)} className=' text-sm border-2 border-white text-center py-4 rounded-xl' href="">Add to Cart</button>
                </div>
              
            ))}
            
        </div>
    </div>
  )
}

export default Shoes