


import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import Subin from "../Assets/Images/subin.jpg";
import Janak from "../Assets/Images/subin3.jpg";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row sm:w-5/6 ">
        <div className="flex flex-col justify-center sm:text-center md:text-left  md:w-1/2   " >
          <h2 className="text-7xl   text-white">Hi, I  am<br/> Janak BK</h2>
          <p className="text-2xl  text-blue-300">FRONTEND DEVELOPER</p>
          
          <div className=""> 
            <Link to="portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer md:item-center lg:items-center">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden sm:hidden md:block md:w-1/2">
          <img src={Janak} alt="" className="rounded-2xl mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
