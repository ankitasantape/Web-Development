// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Favourites from "./components/Favourites";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       {/* main Page */}
       {/* navbar */}
       <NavBar> NavBar </NavBar>
       {/* Routes */}
       <Routes>
         <Route path="/movies" element={ <>
              <Banner />
              <Movies />
              <Pagination />
           </> } /> 
           <Route path="/favourites" element={ <>
              <Favourites />
             
           </> } /> 
       </Routes>
       {/* Banner */}
       {/* <Banner> Banner </Banner> */}
       {/* Trending Movies  */}
       {/* <Movies> Trending </Movies> */}
       {/* Pagination */}
       {/* <Pagination> Pagination </Pagination> */}
    </BrowserRouter> 
  );
}

export default App;
