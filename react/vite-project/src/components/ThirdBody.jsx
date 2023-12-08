import React from 'react'
import smen from '../assets/about-img.jpg'

export default function ThirdBody() {
  return (
    <section className='mt-20 lg:mt-[-10%] 2xl:mt-1 '>
        <div className='ml-3 mr-3 mb-20 md:flex md:justify-center lg:ml-14  2xl:mx-[45rem]'>
            <div className=''>
                <h1 className='text-[2rem] font-bold '>ABOUT US</h1>
                <p className=' mt-2 2xl:text-center'>There are many variations of passages of 
                     Lorem Ipsum available, but the majority
                      have suffered alteration in some form, by
                       injected humour, or randomisedThere are
                        many variations of passages of Lorem 
                        Ipsum available, but the majority have 
                        suffered alteration in some form, by 
                        injected humour, or randomised

               </p>
               <button  className='bg-blue-700 px-10 py-2 rounded-sm
                text-white mt-5 mb-10 text-[1rem] font-medium lg:px-14'><a href="#">READE MORE</a></button>


     
            </div>

            <div>
                <img src={smen} alt="" className='mr-80 lg:mr-[35rem] ' />

            </div>
        </div>


    </section>
  )
}
