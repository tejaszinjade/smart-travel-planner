// import React from 'react';
// import { Button } from '../ui/button';
// import { Link } from 'react-router-dom';
// import 'animate.css';

// function Hero() {
//   return (
//     <div className='relative h-screen flex flex-col items-center justify-center'>
//       {/* Background Video */}
//       <video
//         className='absolute top-0 left-0 w-full h-full object-cover'
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/bgvideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Overlay Content */}
//       {/* <div className='absolute top-20 left-10 z-10 flex flex-col items-start text-left gap-5 p-5 max-w-3xl'>
//         <h1 className='font-extrabold text-[50px] text-white leading-tight drop-shadow-lg'>
//           <span className='text-[#44BEE4] text-4xl font-bold text-white animate__animated animate__fadeInDown animate__slow'>Unleash Your Next Adventure:</span> <br />
//           AI-Crafted Itineraries, Tailored Just for You!
//         </h1>
//         <p className='text-xl text-white drop-shadow-md'>
//           Your personal trip planner and travel curator, <br />
//           creating custom itineraries tailored to your interest and budget.
//         </p>

//         <Link to={'/create-trip'}>
//           <Button className="bg-orange-500 text-white font-bold rounded-full px-6 py-3 shadow-lg transition duration-300 transform hover:bg-orange-700 hover:scale-105">
//             Get Started, It's Free
//           </Button>
//         </Link>
//       </div>  */}
//       <div className="absolute top-20 left-10 z-10 flex flex-col items-start text-left gap-6 p-6 max-w-3xl">
//         {/* Main Heading */}
//         <h1 className="font-extrabold text-[50px] md:text-[45px] sm:text-[40px] text-white leading-tight drop-shadow-lg">
//           <span className="text-[#44BEE4] text-5xl md:text-4xl sm:text-3xl font-bold animate__animated animate__fadeInDown animate__slow">
//             Unleash Your Next Adventure:
//           </span>
//           <br />
//           <span className="animate__animated animate__fadeInUp animate__delay-1s">
//             AI-Crafted Itineraries, Tailored Just for You!
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-lg md:text-base text-white drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s">
//           Your personal trip planner and travel curator, <br />
//           creating custom itineraries tailored to your interests and budget.
//         </p>

//         {/* CTA Button */}
//         <Link to={'/create-trip'} className="animate__animated animate__zoomIn animate__delay-3s">
//           <Button className="bg-orange-500 text-white font-bold rounded-full px-8 py-3 text-lg shadow-lg transition duration-300 transform hover:bg-orange-700 hover:scale-110">
//             Get Started, It's Free
//           </Button>
//         </Link>
//       </div>
      
//     </div>
//   );
// }

// export default Hero;

import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import 'animate.css';

function Hero() {
  return (
    <div className='relative h-screen flex flex-col items-start justify-center pl-10'>
      {/* Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
      >
        <source src="/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Overlay Content */}
      <div className="absolute top-20 left-10 z-10 flex flex-col items-start text-left gap-6 p-6 max-w-3xl">
        {/* Main Heading */}
        <h1 className="font-extrabold text-6xl md:text-5xl sm:text-4xl text-white leading-tight drop-shadow-xl">
          <span className="text-[#FFD700] text-6xl md:text-5xl sm:text-4xl font-bold animate__animated animate__fadeInDown animate__slow">
            Unleash Your Next Adventure:
          </span>
          <br />
          <br/>
          <span className="animate__animated animate__fadeInUp animate__delay-1s">
            AI-Crafted Itineraries, <span><br/></span>Tailored Just for You!
          </span>
          <br/>
          <br/>
        </h1>

        {/* Description */}
        <p className="text-2xl md:text-xl sm:text-lg text-white drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s">
          Your personal trip planner and travel curator, 
          creating custom itineraries tailored to your interests and budget.
        </p>
        <br/>
        

        {/* CTA Button */}
        <Link to={'/create-trip'} className="animate__animated animate__zoomIn animate__delay-3s">
          <Button className="bg-orange-500 text-white font-bold rounded-full px-10 py-4 text-2xl shadow-lg transition duration-300 transform hover:bg-orange-700 hover:scale-110">
            Get Started, It's Free
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
