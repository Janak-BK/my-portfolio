


import React from "react";
import Pet from "../Assets/Images/c.jpg";
import Car from "../Assets/Images/image2.png";
import Cloud from "../Assets/Images/weather.webp";
import Food from "../Assets/Images/masala.jpg";
import { Link } from 'react-scroll';

const Portfolio = () => {
  const portfolios = [
    {
      id: 3,
      src: Cloud,
      link: 'https://weather-app-topaz-three-38.vercel.app',
    },
    {
      id: 4,
      src: Food,
      link:'https://food-website-blush.vercel.app',
    },
    {
      id: 2,
      src: Car,
      link:'https://first-project-ebon-gamma.vercel.app/',
    },
    {
      id: 1,
      src: Pet,
    },
  ];

  const handleLinkClick = (link) => {
    // console.log("Opening link:", link);
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:w-5/6">
        <div className="pb-8 text-center item-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 sm:px-0 ">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => handleLinkClick(link)} className="w-1/4 rounded-lg px-4 py-2 m-2 duration-200 hover:scale-105 bg-blue-600  hover:bg-blue-800">
                  Demo
                </button>
                {/* <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
