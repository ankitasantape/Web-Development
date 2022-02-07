import React from 'react';
import Image from "../Poster.jpg";


function Movies() {
  return <>
    <div class="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
        
        <div class="flex flex-wrap justify-center ">
            {/* poster 1 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh] w-[150px] 
                         bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110 
                         ease-out duration-300  `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
            {/* poster 2 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh]  w-[150px]  bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110
                         ease-out duration-300 `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
            {/* poster 3 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh]  w-[150px]  bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110
                         ease-out duration-300 `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
            {/* poster 4 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh]  w-[150px]  bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110
                         ease-out duration-300 `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
            {/* poster 5 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh]  w-[150px]  bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110
                         ease-out duration-300 `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
            {/* poster 6 */}
            <div class={`bg-[url(${Image})] 
                         md:h-[30vh] md:w-[250px]
                         h-[25vh]  w-[150px] bg-center bg-cover 
                         flex items-end rounded-xl m-4 hover:scale-110
                         ease-out duration-300 `}> 
                <div class={`w-full 
                             text-center font-bold text-white p-2 
                             bg-gray-900 rounded-b-xl`} >Spider-Man : No Way Home
                </div>
            </div> 
        </div>
    </div>
      
  </>;
}

export default Movies;
