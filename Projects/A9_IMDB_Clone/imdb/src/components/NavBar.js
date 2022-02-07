// shortcut -> rfce
import React from 'react';
import Logo from "../logo.png";
import {Link} from 'react-router-dom';

function NavBar() {
  return <>
     <div class="border pl-12 flex space-x-8 items-center py-4">
        <img class="w-[50px] md:w-[60px]" src={Logo}></img>
        <Link to="movies" class="text-blue-700 
           font-bold 
           text-xl 
           md:text-3xl"> Movies </Link> 
        <Link to="favourites" class="text-blue-700 font-bold text-xl md:text-3xl">
           Favourites
        </Link> 
     </div>
  </>;
}

export default NavBar;
