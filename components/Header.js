import {BsApple, BsBucket} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

  return (
    <div id="home" className="header bg-black w-screen h-full">
          <nav className="py-4 w-screen bg-black/80 px-44 
         h-nav backdrop-blur-sm 
        fixed  text-white z-20 ">
              <ul className='h-uli text-white flex items-center justify-between '>
                <li>
                  <HiOutlineMenuAlt4/>
                </li>
                <li><a href='#home'><BsApple/></a></li>
                <li className=' text-[#bab8b8]'><BsBucket/></li>

              </ul>
            <ul className="flex items-center  h-ul">
                <li className='text-white'><a href="#home"><BsApple/></a></li>
                <li className='h-text'>Store</li>
                <li className='h-text'>Mac</li>
                <li className='h-text'>iPad</li>
                <li className='h-text'>iPhone</li>
                <li className='h-text'>watch</li>
                <li className='h-text'>Air Pads</li>
                <li className='h-text'>Tv & Home</li>
                <li className='h-text'>Only On Apple</li>
                <li className='h-text'>Accessories</li>
                <li className='h-text'>Support</li>
              <li className='flex items-center space-x-8'>
              <li className='h-icon text-[#bab8b8]'><AiOutlineSearch/></li>
                 <li className='h-icon text-[#bab8b8]'><BsBucket/></li>
              </li>

            </ul>
         
        </nav>
        <div className='absolute text-white flex items-center flex-col
         w-screen text-center pt-14 justify-center'>
          <h1 className='text-[60px] font-bold pro'>iPhone 14 Pro</h1>
          <p className='text-[30px] h-link'><span>Pro.</span> Beyond.</p>
          <p className='text-[#2997ff] space-x-6 text-[24px] h-buy'> <a>Learn More.</a><a>Buy.</a></p>
        </div>
           <div className="flex items-center justify-center iphone cursor-pointer">
      <Link href='Apple'>
      <img className="h-[350px] w-[400px] sm:h-[350px] sm:w-[600px] "
       src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/screenshot_2022-09-08_at_12-sixteen_nine_0.png?size=948:533' alt=''  />
      </Link> 
       </div>

              
    
    </div>
  )
}

export default Header