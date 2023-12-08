import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import styles bundle
import 'swiper/css/bundle';
import NavBar from './components/NavBar'
import FristBody from './components/FristBody'
import SecondBody from './components/SecondBody'
import ThirdBody from './components/ThirdBody'
import FourthBody from './components/FourthBody'
import FifthBody from './components/FifthBody'
import SixthBody from './components/SixthBody'
import SeventhBody from './components/SeventhBody'
import EighthBody from './components/EighthBody'
import GetinTouch from './components/GetinTouch';



function App() {


  return (
    <>
      <NavBar />
      <FristBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <FifthBody />
      <SixthBody />
      <SeventhBody />
      <EighthBody />
      <GetinTouch /> 
    

    </>
  )
}

export default App
