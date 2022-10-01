import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {BsApple} from 'react-icons/bs'
const Watch = () => {
  return (
    <div className='mt-6 px-6 flex items-center space-x-5 cards'>
        <div className='w-[600px]  '>
        <div className='flex flex-col items-center justify-center mt-10'>
       <h1 className='text-[50px] font-bold flex items-center '><BsApple className='mr-1'/>Watch</h1>
           <p className='font-normal text-[16px] uppercase text-orange-600'>SE</p>
           <p className='font-normal text-[25px]'>A great deal to love</p>
           <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'>
      <span className='flex'>
        <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
       </div>
           <div className='flex items-center justify-center mt-4 '>
           <img className='h-[350px] w-[400px] flex items-center justify-center card-img' 
           src='https://www.apple.com/v/apple-watch-se/i/images/overview/hero/hero__fmx18j9bq0ya_large.jpg'
            alt='' />
           </div>
        </div>
        <div className='w-[600px]  '>
        <div className='flex flex-col items-center justify-center mt-10'>
       <h1 className='text-[50px] font-bold flex items-center '><BsApple className='mr-1'/>Fitness+</h1>
           <p className='font-normal text-[24px] '>Fitness for everyone</p>
           <p className='font-normal text-[25px]'>Now all you need is iPhone</p>
           <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'>
      <span className='flex'>
        <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Notify me</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
       </div>
           <div className='flex items-center justify-center mt-4 '>
           <img className='h-[350px] w-[400px] flex items-center justify-center card-img' 
           src='https://www.gadgetvoize.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-Fitness-Plus-220907-1536x864.jpg'
            alt='' />
           </div>
        </div>
    </div>
  )
}

export default Watch