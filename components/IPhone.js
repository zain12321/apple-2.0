import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {BsApple} from 'react-icons/bs'

const IPhone = () => {
  return (
    <div className='bg-white w-screen'>
     <div className='flex flex-col items-center justify-center mt-10 mb-14'>
     <h1 className='text-[30px] sm:text-[60px]  font-medium'>
      IPhone 14
     </h1>
     <p className='text-[20px] sm:text-[30px] font-normal'>
   Big and bigger
     </p>
     <p className='text-[14px] sm:text-[22px] text-[#373737] '>IPhone 14 plus available starting 10.7</p>
     <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'><span className='flex
      
     '><span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
     <img className='h-[240px] w-[290px] sm:h-[320px] sm:w-[350px] mt-4' src='https://images.ctfassets.net/8utyj17y1gom/3I7j14E7rztYpvFdRCEvsu/5782e695e79fedc0d40e4c8691a72258/iPhone14-new.png'
     alt=""/>
     </div>
     <div className='flex flex-col items-center justify-center  mb-4'>
     <h1 className='text-[30px] sm:text-[60px] flex items-center  font-medium'>
      <BsApple/>Watch
     </h1>
     <p className='text-[20px] sm:text-[20px] font-medium tracking-widest uppercase text-orange-600'>
Ultra
     </p>
     <p className='text-[14px] sm:text-[22px] text-[#373737] '>IPhone 14 plus available starting 10.7</p>
     <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'>
      <span className='flex'>
        <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
     <img className='h-[240px] w-[290px] sm:h-[420px] sm:w-[1150px] mt-4' src='https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-Orange-Alpine-Loop-Side-Button-Digital-Crown-220907_big.jpg.large.jpg'
     alt=""/>
     </div>
   
    </div>
  )
}

export default IPhone