import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen  flex justify-center items-center p-4 mt-5 sm:mt-0'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-underline text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text  '>// Submit the form below or shoot me an email - <a className='font-sans cursor-pointer' href='mailto:bijithkr07@gmail.com'
              target="_blank"> bijithkr07@gmail.com </a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'  required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'  required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='text-white bg- border-2 transition duration-300 border-mainBg hover:bg-mainBg hover:text-txtColor  px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact