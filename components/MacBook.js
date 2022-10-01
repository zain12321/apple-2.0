import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {BsApple} from 'react-icons/bs'
import {FaCcApplePay} from 'react-icons/fa'

const MacBook = () => {
  return (
    <div className='mt-6 px-6 flex items-center space-x-5 cards'>
    <div className='w-[600px]  '>
    <div className='flex flex-col items-center justify-center mt-10'>
   <h1 className='text-[40px] font-bold flex items-center '>MacBook Air</h1>
       <p className='font-medium text-[20px] flex items-center'>Supercharged by <FaCcApplePay 
       className='ml-1 h-6 w-6'/></p>
       <p className='font-normal text-[22px]'>A great deal to love</p>
       <p className='text-[19px] sm:text-[20px] text-[#334cbb] flex items-center space-x-4'>
  <span className='flex'>
    <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
 <span className='flex '><span>Buy</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
 </span></p>
   </div>
       <div className='flex items-center justify-center mt-4 '>
       <img className='h-[350px] w-[450px] flex items-center justify-center card-img' 
       src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2022/06/06/8afaa1d969fb57a376c6963ce162034c.jpg?itok=g_MJsp4Q&_ga=2.2825584.1777667497.1664620726-2024169885.1664620726&_gl=1*edv6u5*_ga*MjAyNDE2OTg4NS4xNjY0NjIwNzI2*_ga_J13NKB0C5P*MTY2NDYyMDcyNi4xLjAuMTY2NDYyMDcyNi4wLjAuMA..'
        alt='' />
       </div>
    </div>
    <div className='w-[600px]  '>
    <div className='flex flex-col items-center justify-center mt-10'>
   <h1 className='text-[40px] font-medium flex items-center '><BsApple className='mr-1'/>Card+</h1>
       <p className='font-medium text-[21px] '>Get up to 3% Daily cash Back</p>
       <p className='font-normal text-[22px]'>With every purchase</p>
       <p className='text-[19px] sm:text-[20px] text-[#334cbb] flex items-center space-x-4'>
  <span className='flex'>
    <span>Learn More</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/></span>
 <span className='flex '><span>Notify me</span><IoIosArrowForward className='mt-[6px] sm:mt-[8px] ml-1 h-5 w-5'/>
 </span></p>
   </div>
       <div className='flex items-center justify-center mt-4 '>
       <img className='h-[350px] w-[450px] flex items-center justify-center card-img' 
       src='https://www.claruscommerce.com/wp-content/uploads/2019/07/apple-card-instant-benefits-0x0.jpg'
        alt='' />
       </div>
    </div>
</div>
  )
}

export default MacBook