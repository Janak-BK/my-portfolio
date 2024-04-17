// import React, { useState } from 'react'
// import { FaBars,FaTimes } from "react-icons/fa";
// import {Link} from 'react-scroll'

// const NavBar = () => {

//   const [nav,setNav] = useState(false);

//    const links = [
//     {
//       id: 1,
//       link: 'home'
//     },
//     {
//       id: 2,
//       link: 'about'
//     },
//     {
//       id: 3,
//       link: 'portfolio'
//     },
//     {
//       id: 4,
//       link: 'experience'
//     },
//     {
//       id: 5,
//       link: 'contact'
//     },
//    ]


//   return (
//     <div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
//         <div>
//             <h1 className='text-5xl font-signature ml-2'>Jk</h1>
//         </div>
//         <ul className='hidden md:flex'>
//           {links.map(({id,link}) => (
//             <li key={id} className='px-5 cursor-pointer capitalize text-gray-300 hover:scale-105 '>
//               <Link to={link} smooth duration={500} >{link}</Link>
//             </li>
//           ))}
            
//         </ul>


//         <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
//           {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
//         </div>

//         {nav && (
//           <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
//           {links.map(({id,link}) => (
//              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'> <Link
//              onClick={() => setNav(!nav)}
//              to={link}
//              smooth
//              duration={500}
//            >
//              {link}
//            </Link></li>
//           ))}
//         </ul>
//           )}

//     </div>
//   )
// }

// export default NavBar


import React, { useState } from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {

  const [nav,setNav] = useState(false);

   const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
   ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Jk</h1>
        </div>
        <ul className='hidden md:flex text-center'>
          {links.map(({id,link}) => (
            <li key={id} className='px-5 text-center justify-center items-center cursor-pointer capitalize text-gray-300 hover:scale-105 hover:bg-zinc-950 rounded-lg h-8 '>
              <Link to={link} smooth duration={500} >{link}</Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
          {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 right-0  h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 w-1/2 '>
          {links.map(({id,link}) => (
             <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:bg-zinc-950 rounded-md'> <Link
             onClick={() => setNav(!nav)}
             to={link}
             smooth
             duration={500}
           >
             {link}
           </Link></li>
          ))}
        </ul>
          )}

    </div>
  )
}

export default NavBar

