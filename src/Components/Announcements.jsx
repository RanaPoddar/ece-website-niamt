import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Announcements = () => {

const announcementList = [
    {message : "Nurturing Future Leadership Program (MMTTP, Ministry of Education, Government of India)",
        link: "/"
    },
    {message : "GATE CSE 2024",
    link: "/"
    },
    {message : "Internal Hackathon for Smart India Hackathon 2024",
    link: "/"
    },
    {message : "e-Yantra Innovation Challenge 2023-24 - Register Now!",
    link: "/"
    },
    {message : "JAM 2024",
    link: "/"
    },


]


  return (
  <>
    <div className='bg- w-full py-10 px-5 lg:px-28 lg:py-16'>
    <div className='capitalize flex justify-center pb-7' >
        <h1 className='text-3xl md:text-4xl font-bold font-josefin'>Announcements</h1>
    </div>

<div className='flex justify-center'>
<ul className='flex flex-col gap-3 font-poppins '>
    {announcementList.map((d) => (
        <li key={d.message} className='flex text-lg'>
        <FaArrowRightLong className='mr-3 mt-1 font-extrabold text-customBlueDark'/>
        <a href={d.link}>{d.message}</a>
        </li>
    ))}
    </ul>
</div>

    </div>
  </>
  )
}

export default Announcements