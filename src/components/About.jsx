import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const About = () => {
  return (
    <div name='about' className='w-full h-screen  text-gray-300'>
      <hr />
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-black font-bold inline border-b-4 border-underline'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-txtColor'>
            <div >
              <p className='sm:text-right text-4xl font-bold'>Hi. I'm Bijith, nice to meet you. Please take a look around.
              </p>
              <div className='sm:flex  justify-end py-3'>
                <a href='https://github.com/bijith17'
              target="_blank"><FaLinkedin className='text-4xl mx-3 transition duration-300 hover:text-blue-700 hover:scale-110 '/></a>
                <a href=""><FaGithub className='text-4xl mx-3 transition duration-300 hover:scale-110'/></a>
                <a href='mailto:bijithkr07@gmail.com'
              target="_blank"><HiOutlineMail className='text-4xl mx-3 transition duration-300 hover:text-[#bb001b] hover:scale-110'/></a>
                <a href='https://stackoverflow.com/users/22374252/bijith-s-s'
              target="_blank"><FaStackOverflow className='text-4xl mx-3 transition duration-300 hover:text-[#f48024] hover:scale-110'/></a>
              
              
              
              
              </div>
            </div>
            
            <div>
              <p>As a passionate Front-end Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and SCSS. I excel at designing and maintaining responsive websites that offer a seamless user experience. My expertise lies in crafting dynamic, engaging interfaces by writing clean and optimized code and leveraging cutting-edge development tools and techniques. I'm also a team player who thrives on collaborating with cross-functional teams to deliver exceptional web applications.What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
