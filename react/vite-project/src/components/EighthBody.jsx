import React from 'react'
import GoogleMap from './GoogleMap'

export default function EighthBody() {
  return (
    <section className='pl-4 block  bg-gray-100 mb-14 md:flex '>
      <h1 className='text-[2rem] font-bold pt-20'>CONTACT US</h1>
      <div >
        <form action="danish.php">
          <div className=' bg-white  mr-4 px-6 py-2 text-left  shadow-2xl '>
            <input type="text" placeholder="Name"
              className='' />
          </div>
          <div className='bg-white mt-10 mr-4 px-6 py-2 text-left  shadow-2xl '>
            <input type="text" placeholder="Phone number" />
          </div>

          <div className='bg-white mt-10 mr-4 px-6 py-2 text-left  shadow-2xl '>
            <input type="text" placeholder="Email" />
          </div>

          <div className='bg-white mt-10 mr-4 px-4 py-14 text-left  shadow-2xl '>
            <input type="text" placeholder="Message" />
          </div>

        </form>
      </div>
      <div>
        <button className='bg-blue-700 px-12 py-2 
                text-white mt-10 mb-10 text-[1rem] font-medium'><a href="#">SEND</a></button>

      </div>


      <div>


      </div>
      <GoogleMap />
    </section>
  )
}


