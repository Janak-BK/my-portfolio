


import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocioLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/janak-bk-2361b1293/",
      style: "bg-blue",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Janak-BK",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:subinsunar000@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Janak BK CV.pdf",
      style: "",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Facebook < FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/subinjung.snr/",
      style: "",
    },
  ];

  const socio = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/janak-bk-2361b1293/",
      style: " bg-gray-500",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Janak-BK",
      style: "bg-gray-500",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:subinsunar000@gmail.com",
      style: "bg-gray-500",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Janak BK CV.pdf",
      style: "bg-gray-500",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          < FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/subinjung.snr/",
      style: " bg-blue-500", 
    },
  ];

  return (
    <div>
      {/* Show links on larger screens */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between gap-2 items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-b bg-black" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Show socio on smaller screens */}
      <div name='jana' className="lg:hidden flex flex-row bottom-4 left-1/2 transform -translate-x-1/2 fixed justify-center  ">
        <ul className="flex justify-center "> {/* Center the ul tag horizontally */}
          {socio.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center h-12  px-6 bg-gradient-to-b from-black via-black to-gray-800 " +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex items-center text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocioLinks;
