import React from 'react';
import Image from "../Poster.jpg";

function Banner() {
  return <>
     <div class={`bg-[url(${Image})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}> 
         <div class={`text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center`} >Spider-Man : No Way Home</div>
     </div>
  </>;
}

export default Banner;
