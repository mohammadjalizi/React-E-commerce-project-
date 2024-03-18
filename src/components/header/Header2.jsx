import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Header2 = () => {
  return (
    <div className='    mt-12 flex justify-between     md:mx-40 '>
      
<div>

<Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    
      </Swiper>
</div>


<div className='    hidden md:block swiper left    ' > 
   <div>
<img src='src/assets/coffee_assets/black_coffee/portrait/black_coffee_pic_1_portrait.png' />
   </div>
   <div>
<img src="src/assets/coffee_assets/black_coffee/portrait/black_coffee_pic_2_portrait.png" alt="" />
   </div>
      </div> 
    </div>
  )
}

export default Header2