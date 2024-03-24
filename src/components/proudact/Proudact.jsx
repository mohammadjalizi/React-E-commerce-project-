import { ShoppingCart } from '@mui/icons-material'
import React from 'react'


import './product.css';

const mydata=[

{id:1, alt:"خرید دمنوش گیاهی مخلوط بابونه تی بگ", src:"https://mehr-e-giah.com/wp-content/uploads/2022/12/8-1-800x800.jpg",title:" دمنوش گیاهی مخلوط بابونه 14 عددی ",price:"۳۲۷,۰۰۰" },
{id:1, alt:"خرید دمنوش گیاهی مخلوط بابونه تی بگ", src:"https://mehr-e-giah.com/wp-content/uploads/2022/12/1-2-2-1-800x800.jpg",title:"دمنوش مخلوط گل گاوزبان 14 عددی",price:"۳۲۷,۰۰۰" },
{id:1, alt:"خرید دمنوش گیاهی مخلوط بابونه تی بگ", src:"https://mehr-e-giah.com/wp-content/uploads/2022/12/10-1-800x800.jpg",title:"دمنوش مخلوط چای ترش 14 عددی",price:"۳۲۷,۰۰۰" }



]

const Proudact = () => {
  return (
    <div className=' bg-[#FAFAFA] my-5 '>
        
<div className=' text-center my-8'>


  

    <h1 className=' text-3xl '>پرفروش ترین محصولات</h1>

    <div className=' flex justify-center items-center my-3 '>

    <img
  width={160}
  height={36}
  decoding="async"
  src="https://mehr-e-giah.com/wp-content/uploads/2022/11/Icon1.png"
  title="Icon1"
  alt="Icon1"
  data-lazy-src="https://mehr-e-giah.com/wp-content/uploads/2022/11/Icon1.png"
  data-ll-status="loaded"
  className="entered lazyloaded"
/>

    </div>
</div>
<div className=' swiper  flex flex-wrap  justify-center gap-9 '>



{mydata.map((item)=>{

return(

<div className=' shadow-2xl rounded-3xl ' > 

<img className=' w-80 h-80 ' src={item.src} alt="" />

<h4 className=' p-10 '>
<a href=""> {item.title} </a>

</h4>
<div className=' flex justify-between mx-8 py-5'>

<div>
  {item.price}
  <span> نومان</span>
  
</div>
<div className=' icon '>
<ShoppingCart className=' hover:text-red-300 cursor-pointer '/>
  </div>
  </div>

</div>

  
)


})}


</div>



{/* selectproducts */}


<div  className=' flex flex-wrap     md:mx-52   my-10 justify-between '>

<div>
  <h2 className=' m-10'>انتخاب محصولات</h2>
</div>
<div className='  '>
 <button className=' m-10 border  rounded-2xl  p-4 '>  مشاهده همه </button>
 <button className=' m-10 border  rounded-2xl p-4 '>  مشاهده همه </button>
 <button className=' m-10 border  rounded-2xl  p-4 '>  مشاهده همه </button>
 <button className=' m-10 border  rounded-2xl  p-4 '>  مشاهده همه </button>
</div>
</div>


</div>

   
  )
}

export default Proudact