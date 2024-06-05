import React from 'react'
import aboutImg from "../assets/about.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='bg- px-5 py-10 md:px-10 lg:px-36 lg:py-16 w-full'>
      <div className='flex justify-center'>
    <h1 className='text-3xl md:text-4xl font-josefin font-bold pb-7'>About Department</h1>
</div>
{/* About Section */}
{/* main Container div */}
<div className='xl:flex justify-center gap-3 px-5 md:px-10 md:py-10'>
<div className=' md:flex-none w-full h-40 md:w-[28rem] md:h-72 max-w-[28rem] max-h-80 sm:float-left sm:mr-3 mb-3'>
{/* <img className='w-full h-full' src={aboutImg}/> */}
<div className='h-full w-full'>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zYaAyAantfI?si=P0Je8bJzPeu61zbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>


<p className='text-justify md:flex-1 font-poppins text-lg lg:text-xl'>
Department of Electronics and Computer Engineering has been established in 2020. The department envisages to support the mammoth task of transforming the Institute into an advanced research centre for manufacturing technology in the country. The enablers of such transformation, such as computer-aided design and manufacturing, computer-aided engineering, electronic control systems and devices, computer networks and security, industrial automation, data analytics, etc. will form the core of activities of this youngest department of the Institute.
</p>

</div>

<div className='flex justify-center'>
  <div className='bg-customYellow px-3 py-2 rounded-xl mt-10'>
    <Link className='font-bold font-poppins' to="/about"> Know More </Link>
  </div>
</div>

      </div>
    </>
  )
}

export default About