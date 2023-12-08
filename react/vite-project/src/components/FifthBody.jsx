import React from 'react'
import onespaner from '../assets/onespaner.png'
import electrical from '../assets/electrical.png'
import plumping from '../assets/plumping.png'

export default function FifthBody() {
    return (
        <section className='pt-20'>
            <div>
                <h1 className='text-[2rem] font-bold text-center'>OUR SERVICES</h1>
            </div>
            <div className='pt-16 md:flex justify-center'>
                <div className='bg-white ml-6 mr-6 mt-8 border-4  shadow-2xl hover:text-white hover:fill-white hover:bg-orange-500'>
                    <div className='px-20 py-6 md:px-16 lg:px-24 xl:px-40'>
                        <img className='' src={onespaner} alt="" />  
                    </div>
                    <h1 className='text-center font-medium text-[1.3rem]'>Maitenance</h1>
                    <p className='text-center ml-2 mr-2 md:pb-3'>when looking at its layout. The point
                        of using Lorem Ipsum is that it has a
                        more-or-less normal</p>
                </div>
                <div className='bg-white ml-6 mr-6 mt-8 border-4 shadow-2xl hover:text-white hover:bg-orange-500'>
                    <div className='px-20 py-6 md:px-16 lg:px-24 xl:px-40'>
                        <img src={electrical} alt="" className='' />
                    </div>
                    <h1 className='text-center font-medium text-[1.3rem]'>Electrical</h1>
                    <p className='text-center ml-2 mr-2 md:pb-3'>when looking at its layout. The point
                        of using Lorem Ipsum is that it has a
                        more-or-less normal</p>
                </div>
                <div className='bg-white ml-6 mr-6 mt-8 border-4 shadow-2xl hover:text-white hover:bg-orange-500'>
                    <div className='px-20 py-6 md:px-16 lg:px-24 xl:px-40'>
                        <img src={plumping} alt="" className=''/>
                    </div>
                    <h1 className='text-center font-medium text-[1.3rem]'>Plumping</h1>
                    <p className='text-center ml-2 mr-2 md:pb-3'>when looking at its layout. The point
                        of using Lorem Ipsum is that it has a
                        more-or-less normal</p>
                </div>

            </div>
            <div>
                <button className='bg-blue-700 px-10 py-2 ml-16 mr-16
                text-white mt-10 mb-10 text-[1rem] font-medium md:mx-72 md:px-12 lg:mx-[26rem] xl:mx-[39rem]'><a href="#">VIEW MORE</a></button>

            </div>
        </section>
    )
}
