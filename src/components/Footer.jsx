import React from 'react'
import { FaLinkedin, FaStackOverflow,FaGithub, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
        <hr />
        <div className='flex flex-col justify-center items-center'>
          <div className="heading">
            <h1 className='text-gray-300  text-xl sm:text-2xl my-5'>CONNECT ME</h1>
          </div>
            <div className=" p-3 grid grid-cols-4 gap-8 sm:gap-20 mb-5">
              <a  href='https://www.linkedin.com/in/bijith-s-s-40b81428b/' target="_blank"
              className='transition duration-300 hover:text-mainBg'
              >
                <FaLinkedin className='text-3xl'/>
                </a>
              <a href='https://github.com/bijith17'
              target="_blank" className='transition duration-300 hover:text-mainBg'>
                <FaGithub className='text-3xl'/>
              </a>
              <a  href='https://stackoverflow.com/users/22374252/bijith-s-s'
              target="_blank" className='transition duration-300 hover:text-mainBg'>
                <FaStackOverflow className='text-3xl'/>
              </a>
              <a href="" className='transition duration-300 hover:text-mainBg'>
                <FaInstagram className='text-3xl'/>
              </a>
            </div>
          <p className='mb-2'>&copy;BIJITH. All rights reserved</p>  
        </div>
    </div>
  )
}

export default Footer