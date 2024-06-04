import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Tab = () => {
  return (
    <>
<div className='bg- w-full h-auto py-5 px-2 lg:px-28 lg:py-7 flex flex-col gap-3 md:flex-row justify-evenly items-center'>

{/* card 1  */}
<div className='bg-customBlueLight w-64 h-20 rounded-2xl flex justify-center items-center p-6 border border-customBlueDark'>
    <FaUserGraduate className='text-customBlueDark text-2xl mr-4'/>
    <Link to='/academic-programmes' className='text-customBlueDark font-josefin font-semibold text-xl '>Academic <br/> <span> Programmes</span></Link>
</div>

{/* card 2  */}
<div className='bg-customBlueLight w-64 h-20 rounded-2xl flex justify-center items-center p-6 border border-customBlueDark'>
<FaChalkboardTeacher className='text-customBlueDark text-2xl mr-4'/>
<Link to="/faculty" className='text-customBlueDark font-josefin font-semibold text-xl'>Faculty</Link>
</div>

{/* card 3  */}
<div className='bg-customBlueLight w-64 h-20 rounded-2xl flex justify-center items-center p-6 border border-customBlueDark'>
<IoNotifications className='text-customBlueDark text-2xl mr-4'/>
<Link to="/notifications" className='text-customBlueDark font-josefin font-semibold text-xl'>Notifications</Link>
</div>

</div>
    </>
    
  )
}

export default Tab