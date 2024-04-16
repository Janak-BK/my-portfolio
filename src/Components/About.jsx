


import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center'> 
      <div className='max-w-screen-lg p-4 w-full font-poppins sm:w-5/6 '>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-10 text-justify md: text-12xl '>
          Hi there!
          <br />I'm a Frontend Developer with a passion for building beautiful and functional user interfaces. I have a solid understanding of ReactJS, Tailwind CSS and Bootstrap. My goal is to create engaging and responsive websites that provide a seamless user experience. I am experienced in creating dynamic, high-performance web applications with ReactJS. I am confident in using components, hooks, and other key features of ReactJS to build scalable and maintainable web applications. In my free time, I enjoy exploring new technologies and staying up to date with the latest trends in frontend development. I am a problem solver by nature and enjoy tackling challenges head-on. I am always looking to improve my skills and grow as a developer. Thank you for taking the time to read my profile, and I look forward to working with you on your next project!
        </p>
      </div>
    </div>
  );
};

export default About;
