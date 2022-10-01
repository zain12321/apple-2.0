import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {BsApple} from 'react-icons/bs'
const TwoCards = () => {

  return (
    <div className=' flex items-center space-x-4 px-4 mb-11 cards' >
        <div className='bg-black text-white  w-[660px]'>
       <div className='flex flex-col items-center justify-center mt-10'>
       <h1 className='text-[50px] font-bold'>AirPods Pro</h1>
           <p className='font-medium text-[25px]'>Rebuilt from the sound up</p>
           <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'>
      <span className='flex'>
        <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
       </div>
<img className='w-[430px] h-[350px] m-auto mt-[130px] card-image' 
src='https://www.istore.co.za/media/wysiwyg/Beats/Airpods_Hero.png' />
        </div>

        <div className='bg-black text-white  w-[660px] ca'>
       <div className='flex flex-col items-center justify-center mt-10'>
       <h1 className='text-[50px] font-bold flex items-center '><BsApple className='mr-1'/>Watch</h1>
           <p className='font-normal text-[16px] uppercase text-orange-600'>Series 8</p>
           <p className='font-medium text-[25px]'>A healthy leap a head</p>
           <p className='text-[19px] sm:text-[22px] text-[#334cbb] flex items-center space-x-4'>
      <span className='flex'>
        <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
     <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
     </span></p>
       </div>
<img className='w-[430px] h-[350px] m-auto mt-[105px] card-image ' 
src='https://miro.medium.com/max/720/0*X65n4zosOFtNM_h0.jpg' />
        </div>
    </div>
  )
}

export default TwoCards