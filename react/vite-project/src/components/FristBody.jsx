import React from 'react'
import fmen  from'../assets/slider-img.png'

export default function FristBody() {
  return (
    <section className='bg-blue-200 pt-8 md:flex'>
        <div className='ml-5 md:mr-2'>
            <h1 className='text-[2.5rem] font-semibold text-blue-700 pb-5 md:font-bold'>Repair and Maintenance Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Qui harum voluptatem
                  adipisci. Quos molestiae saepe dicta nobis
                   pariatur, tempora iusto, ad possimus soluta
                    hic praesentium mollitia consequatur 
                 beatae, aspernatur culpa.</p>
                 <button className='bg-orange-400 px-10 py-2 rounded-md text-white mt-5 mb-10 text-[1.1rem]'>CONTACT US</button>
        </div>
        <div>
            <img src={fmen} className='w-84 md:mr-[420px]  '  />
        </div>


    </section>
  )
}
