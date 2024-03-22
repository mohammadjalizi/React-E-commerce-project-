import { ShoppingCart } from '@mui/icons-material'
import React from 'react'
import './slider.css'
const Header2 = () => {
  return (
    <div className='  relative backgrund '>



      <div>
        <img src="src/assets/coffee_assets/image/home-bg.jpg" alt="" />
      </div>
      <div className=' absolute  photo left-10   md:mx-36 top-60  '>

<img src="src/assets/coffee_assets/image/home-img-1.png" alt="" />

      </div>
      <div className='   md:mx-36 w-2/4 absolute   top-72'>

        <h1 className=' text-2xl  mb-4 '>تاثیرات مثبت قهوه بر سلامتی</h1>
        <p className='   p-2 w-96 '>قدرت آنتی اکسیدانی دانه های قهوه سرشار از آنتی اکسیدان هستند. محققان تایید کرده اند که یک فنجان قهوه مقدار آنتی اکسیدان بیشتری نسبت به همین مقدار آب انگور، تمشک ..</p>


        <div className=' transform motion-safe:hover:scale-110 ...  border border-black     w-52 hover:border-dashed  rounded-2xl p-2 cursor-pointer shadow-2xl mt-3 '>
<ShoppingCart/>
<span> همین الان سفارش بده                                </span>
        </div>
      </div>


    </div>
  )
}

export default Header2