import React from 'react';
import { FaFilePdf } from 'react-icons/fa';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-txtColor text-shadows shadow-sm'>
          BIJITH S S
        </h1>
        <h2 className='text-3xl sm:text-6xl text-btn  font-bold text-shadows shadow-sm'>
          I'm a Front-end Developer. 
        </h2>
        <p className='text-gray-700 py-4 max-w-[700px]'>
        Passionate front-end-developer about design and code. Let's collaborate and bring your digital visions to life!
        </p>
        <div>
          <a href="https://drive.google.com/file/d/1THDu9SXcbb1ZpjKIxnGVcGdwq-VrSCck/view?usp=drive_link" 
          target='_blank'>
          <button className=' mx-3 text-btn hover:text-white transition duration-300 group border-2 border-gray-500 px-6 py-3 my-2 flex items-center hover:bg-underline hover:border-underline'>
            Download Resume &nbsp;
            <span className='group-hover:rotate-180 duration-300'>
              <FaFilePdf/>
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
