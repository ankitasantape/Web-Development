import React, { useState, useEffect } from 'react';
import Image from "../Poster.jpg";
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function Movies() {

  const [movies, setMovies] = useState([]);
  useEffect(function(){  
      axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=06e01456b8b015e76cfc8a4f8e71a235")
           .then((res) => 
            { 
              console.table(res.data.results)
              setMovies(res.data.results); 
            }
      )  
  })
  

  return <>
    <div class="mb-8 text-center">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies
        </div>
        {
                movies.length === 0 ?  
                <div class="flex justify-center">
                    <Oval
                    heigth="100"
                    width="100"
                    color='grey'
                    secondaryColor='gray'
                    ariaLabel='loading'
                    /> </div>:  

                <div class="flex flex-wrap
                 justify-center ">
                   {
                     movies.map((movie) => {
                       
                       <div class={`bg-[url(${Image})] 
                            md:h-[30vh] md:w-[250px]
                            h-[25vh] w-[150px] 
                            bg-center bg-cover 
                            flex items-end rounded-xl m-4 hover:scale-110 
                            ease-out duration-300  `}>
                           <div class={`w-full 
                                 text-center font-bold text-white p-2 
                                 bg-gray-900 rounded-b-xl`} >{movie.title}
                           </div>
                       </div> 
                     })
                   }
        </div>
        }
    </div>
      
  </>;
}

export default Movies;
