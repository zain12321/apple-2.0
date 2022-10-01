// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//   {
//     url: 'https://film-book.com/wp-content/uploads/2022/09/ethan-hawke-ewan-mcgregor-raymond-ray-01-700x400-1-700x400.jpg',
//     caption: 'Slide 1'
//   },
//   {
//     url: 'https://is5-ssl.mzstatic.com/image/thumb/nc6_OLkCV3TgiHCklTQbMg/1679x945sr.webp',
//     caption: 'Slide 2'
//   },
//   {
//     url: 'images/slide_4.jpg',
//     caption: 'Slide 3'
//   },
// ];

// const Slideshow = () => {
//     return (
//       <div className="slide-container mx-24 mb-11">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div className="each-slide" key={index}>
//               <div className='h-[400px] object-contain w-full' style={{'backgroundImage': `url(${slideImage.url})`}}>
//                 <span>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//     )
// }

// export default Slideshow













import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'https://is2-ssl.mzstatic.com/image/thumb/rV4S9xWc5p3ow4CuIZ5sTg/1679x945sr.webp',
  'https://is5-ssl.mzstatic.com/image/thumb/W9EUxTdByWYLnSERLSyfxw/1679x945sr.webp',
  'https://is5-ssl.mzstatic.com/image/thumb/7kYY3qpLdf33ogKfm5YMEA/1679x945sr.webp',
  'https://is3-ssl.mzstatic.com/image/thumb/eB2u8w1L3ZB3CzQ5zhTubQ/1679x945sr.webp',
  'https://is5-ssl.mzstatic.com/image/thumb/-KY47T4V4upXUzkPgeVo9g/1679x945sr.webp'
];

const Slideshow = () => {
    return (
      <div className="slide-container mt-4 lg:px-24 xl:px-24 mb-44">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img className='slide-img' key={index} style={{width: "100%", height:"550px", overflow:'hidden'}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow