import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";






export default function GetinTouch() {
  return (
    <section className='bg-blue-950 pt-20'>
      <h1 className='text-white  font-medium text-[1.6rem] text-center'>GET IN TOUCH</h1>
      <div id='line' className='   px- py-12 text-center md:flex justify-around '>
      
        <div className=' '> 
          <div className='mx-[39%] w-20 bg-blue-800 rounded-full p-7  mb-8 md:mx-16'><FaLocationDot className='text-center text-[1.4rem] text-white'/></div>
          <p className='text-white '>Loren Ipsum is simply dummy text</p> 
        </div>
        <div> 
          <div className='mx-[39%] w-20 bg-blue-800 rounded-full p-7 mt-12 mb-8 md:mt-0 md:mx-6'><IoCall className='text-center text-[1.4rem] text-white' /></div>
          <p className='text-white'>+02 1234567890</p>
        </div>
        <div className=''> 
         <div className='mx-[39%] w-20 bg-blue-800 rounded-full p-7 mt-12 md:mt-0 md:mx-6'><IoIosMail  className='text-center text-[1.5rem] text-white'/></div>
          <p className='text-white mt-10 md:mt-7'>demo@gmail.com</p>
        </div>
        
      </div>

      <div className='text-center mt-5 pb-20 '>
        <h1 className='text-white text-[1.6rem] font-medium '>FOLLOW US</h1>
        <div className=' bg-white  mt-6 mx-16 flex justify-center space-x-4 py-2 md:mx-32 lg:mx-60 xl:mx-96 2xl:mx-[60rem]'>
        <div className='text-blue-600'><a href=""><FaFacebookF className='text-center  hover:text-orange-600' /></a></div>
        <div className='text-blue-600'><a href=""><FaTwitter className='text-center text-whte hover:text-orange-600'/></a></div>
        <div className='text-blue-800'><a href=""><TfiYoutube  className='text-center text-whte hover:text-orange-600'/></a></div>
        <div className='text-blue-900'> <a href="#"><FaInstagram  className='text-center text-whte hover:text-orange-600'/></a></div>
        </div>
      </div>
      
      <div className='pt-[1px] bg-white mx-4 md:mx-10 lg:pt-[2px] lg:mx-20 xl:pt-[2.5px] xl:mx-28 2xl:pt-[3px] 2xl:mx-44'></div>
      <div className='pt-4 pb-8'>
        <p className='text-white text-center'>© 2023 All Rights Reserved By Free Html Templates</p>

      </div>

    </section>
  )
}
