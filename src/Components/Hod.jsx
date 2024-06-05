import React from 'react'
import madhuKumari from "../assets/faculty/madhuKumari.jpeg"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Hod = () => {
  return (
    <>
        <div className='bg- w-full py-10 px-5 lg:px-28 lg:py-16'>
        <div className='capitalize flex justify-center pb-7' >
        <h1 className='text-3xl md:text-4xl font-bold font-josefin'>Message from HOD</h1>
    </div>
    
{/* Section Containing HOD Card & Quote Both */}
    <div className='md:flex justify-center'>

    {/* HOD card */}
    <div className='w-full flex justify-center'>
    {/* HOD Image */}
    
    <div className=' p-1 rounded-full'>
    <img className='h-36 w-36 rounded-full' src={madhuKumari} />
     {/* HOD Name */}
     <div className='mt-4 flex justify-center'>
      <h1 className='text-lg font-semibold font-poppins'>Dr Madhu Kumari </h1>
    </div>
</div>
{/* HOD Name */}


   


</div>

{/* Quote Section */}
<div className='flex mt-8 text-center relative'>

<p className='font-medium font-poppins text-gray-800 '> <ImQuotesLeft className='text-gray-800 text-2xl opacity-80'/>To achieve excellence in technical education by offering interdisciplinary engineering courses pertaining to electronics, computers, advanced manufacturing and automation, and to develop strong competence in these domains to serve our great nation.
</p>

</div>
    

    </div>
        </div>
    </>
  )
}

export default Hod