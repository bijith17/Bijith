import React, { useEffect, useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hide,setHide]=useState(false);
  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    if (window.scrollY > 48) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black'>
    {
      hide? <div className='logo text-5xl shadow-lg px-2'>
      
    </div> :  <div className='logo text-5xl shadow-lg px-2'>
      BIJITH
    </div>
    }
     

      {/* menu */}
      <ul className='hidden md:flex '>
        <li>
          <Link to='home' smooth={true} duration={500} className='hover:text-underline '>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover:text-underline '>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover:text-underline '>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500} className='hover:text-underline '>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover:text-underline '>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0  w-full h-screen bg-mainBg flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className='hover:text-underline '>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className='hover:text-underline '>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-underline '>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500} className='hover:text-underline '>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-underline '>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/bijith-s-s-40b81428b/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/bijith17'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bb001b]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:bijithkr07@gmail.com'
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f48024]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://stackoverflow.com/users/22374252/bijith-s-s'
              target="_blank"
            >
              Stack <br /> overFlow <FaStackOverflow size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
