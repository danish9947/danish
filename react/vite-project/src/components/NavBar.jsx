import React from 'react'
import callLogo from "../assets/call.svg"
import mailLogo from "../assets/mail.svg"
import menuicon from "../assets/menuicon.svg"
export default function NavBar() {
  return (
    <>
      <header>
        <section className='flex  p-4 bg-black text-white text-[1.1rem]  justify-between'>
          <div className='md:flex'>
            <div className='flex '>

              <img src={callLogo} className='w-4 ' />
              Call:+01
             </div>
             <div>

              123455678990
             </div>
           </div>
          
            <div className='md:flex'>
               <div className='flex '>

               <img src={mailLogo} className='w-4 ' />
                Email:
               </div>
               <div>
                demo@gmail.com
               </div> 
            </div>
        </section>

        <section className='flex p-4 bg-blue-200  text-[rem] justify-between'>
          <div>
            <h1 className='text-blue-700 font-bold text-[1.5rem] place-content-center'>INANCE</h1>
          </div>
          <div>
            <img src={menuicon} className='w-10 ' />


          </div>
        </section>

      </header>

    </>
  )
}
