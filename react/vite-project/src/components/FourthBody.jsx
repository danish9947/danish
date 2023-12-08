import React from 'react'
import hide from '../assets/professional-img.png'

export default function FourthBody() {
  return (
    <section className='bg-blue-200 '>
        <div className=' pt-16 pb-10 block md:flex'>
            <div className='hidden md:'>
                <img src={hide} alt="" />

            </div>
           <div className='ml-4 mr-3'>
            <h1 className='text-blue-700 font-bold text-[2rem]'>WE PROVIDE PROFESSIONAL HOME SERVICES.</h1>
            <p>randomised words which don't look even
                 slightly believable. If you are going to use
                  a passage of Lorem Ipsum, you need to be
                   sure there isn't anything embarrassing
                    hidden in the middle of text. All
                     randomised words which don't look even
                      slightly</p>
                      <button  className='bg-orange-400 px-10 py-2 rounded-sm
                text-white mt-5 mb-10 text-[1rem] font-medium'><a href="#">READE MORE</a></button>
           </div>
        </div>

    </section>
  )
}
