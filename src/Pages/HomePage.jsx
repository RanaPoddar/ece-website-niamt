import React from 'react'
import Hero from '../Components/Hero'
import Tab from '../Components/Tab'
import Announcements from '../Components/Announcements'
import Events from '../Components/Events'
import SnapShorts from '../Components/SnapShorts'
import About from '../Components/About'
import Faculty from '../Components/Faculty'
import Hod from '../Components/Hod'
import Footer from '../Components/Footer'
import Notification from '../Components/Notification'


const HomePage = () => {
  return (
    <>
   <Notification/> 
<Hero/>
    <Tab/>
    <Announcements/>
    <Events/>
    <SnapShorts/>
    <About/>
    {/* <Faculty/> */}
    <Hod/>
    <Footer/>
    </>
    
  )
}

export default HomePage