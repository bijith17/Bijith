import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Bootstrap  from '../assets/bootstrap.jpg';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Git from '../assets/git.png';
import Scss from '../assets/scss.png';
import jQuery from '../assets/jquery.png';
import Vite from '../assets/vite.svg';

const Skills = () => {
  return (
    <div name='skills' className='w-full text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 text-black border-underline '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Scss} alt="HTML icon" />
                  <p className='my-4'> SCSS</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={jQuery} alt="HTML icon" />
                  <p className='my-4'> jQuery</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Vite} alt="HTML icon" />
                  <p className='my-4'>REACT VITE</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              
             
              
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3 ' src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80NmQ4ZDAwZTE5MGJlNjQ3MDUzZjdkOTdmZDA0NzhlND9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5nKe6nJhOqDvUG6NzyDo5HVNm_RiThxzGMbRgg2P0Ls" alt="HTML icon" />
                  <p className='my-4'>NPM</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3' src="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55" alt="HTML icon" />
                  <p className='my-4'>REDUX-TOOLKIT</p>
              </div>
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500 '>
                  <img className='w-20 mx-auto my-3' src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="HTML icon" />
                  <p className='my-4'>FRAMER-MOTION</p>
              </div>
              
              <div className='shadow-sm shadow-gray-800 hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto my-3 ' src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" alt="HTML icon"  />
                  <p className='my-4'>VERCEL</p>
              </div>
            
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
