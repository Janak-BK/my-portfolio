


import React from 'react';
import html from '../Assets/Images/Exprc/html.png';
import css from '../Assets/Images/Exprc/css.png';
import javascript from '../Assets/Images/Exprc/javascript.png';
import bootstrap from '../Assets/Images/Exprc/bootstrap.png';
import tailwind from '../Assets/Images/Exprc/tailwind.png';
import react from '../Assets/Images/Exprc/react.png';
import github from '../Assets/Images/Exprc/github.png';
import vscode from '../Assets/Images/Exprc/vscode.png';

const Experience = () => {
  
  const portf= [
    {
      id: 1,
      src:html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src:css,
      title: 'CSS',
      style: 'shadow-orange-500'
    },
    {
      id: 3,
      src:javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-orange-500'
    },
    {
      id: 4,
      src:bootstrap,
      title: 'BOOTSTRAP',
      style: 'shadow-orange-500'
    },
    {
      id: 5,
      src:tailwind,
      title: 'TAILWIND CSS',
      style: 'shadow-orange-500'
    },
    {
      id: 6,
      src:react,
      title: 'REACTJS',
      style: 'shadow-orange-500'
    },
    {
      id: 7,
      src:github,
      title: 'GITHUB',
      style: 'shadow-orange-500'
    },
    {
      id: 8,
      src:vscode,
      title: 'VSCODE',
      style: 'shadow-orange-500'
    }
  ];

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white sm:w-5/6'>
        <div className='item-center text-center'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline '>Experience</p>
          <p className='py-6'>Technologies I've worked with</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 md:px-0 '>
          {portf.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}>
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
