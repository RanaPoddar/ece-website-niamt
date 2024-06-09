import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Events = () => {

    const EventData = [
        {
            image1: "https://picsum.photos/id/239/200/300",
            image2: "https://picsum.photos/id/270/200/300",
            title1: "Upcoming Event Title 1 ",
            title2: "Past Event Title 1 "
        },  
        {
            image1: "https://picsum.photos/id/240/200/300",
            image2: "https://picsum.photos/id/271/200/300",
            title1: "Upcoming Event Title 2 ",
            title2: "Past Event Title 3 "
        },  
        {
            image1: "https://picsum.photos/id/242/200/300",
            image2: "https://picsum.photos/id/275/200/300",
            title1: "Upcoming Event Title 3 ",
            title2: "Past Event Title 3 "
        },  
        {
            image1: "https://picsum.photos/id/240/200/300",
            image2: "https://picsum.photos/id/280/200/300",
            title1: "Upcoming Event Title 4 ",
            title2: "Past Event Title 5 "
        },  
    ]

    const [upcoming , setUpcoming] = useState(true);
    const handleClick = () => {
        setUpcoming(!upcoming);
    }
  return (
    <>
        <div className='bg- py-10 px-5 lg:px-36 lg:py-16 w-full'>
<div className='flex justify-center'>
    <h1 className='text-3xl md:text-4xl font-josefin font-bold pb-7'>Events & Happenings</h1>
</div>

<div className='w-full flex justify-start '>
<button onClick={handleClick} className='px-4 py-3 bg-customBlueLight text-customBlueDark font-semibold rounded-ss-xl  font-poppins '>Upcoming Events </button>
<button onClick={handleClick} className='px-4 py-3 bg-lightPink text-customBlueDark font-semibold font-poppins rounded-se-xl'>Past Events </button>
</div>
{/* Upcoming Events */}
<div className={`${upcoming ? "bg-customBlueLight" : "bg-lightPink"} w-full p-5 rounded-e-xl rounded-bl-xl  `}>

{/* Cards */}
<div className='grid items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6'>
    {
      EventData.map(({image1 ,image2, title1, title2}) => 
        <Link className='grid' to={"/"}  key={title1}>
        <div className='group h-full grid relative shadow-xl rounded-lg border-2 border-gray-400 hover:border-2 hover:border-primaryBlue-0 transition-all duration-100 ease-in cursor-pointer '>
    <div className=' '>
<img className='rounded-t-lg h-full w-full' src={upcoming ? image1: image2}/>
    </div>
    
{/* title */}
<div className='absolute left-0 bottom-0 h-[30%] w-full bg-black bg-opacity-85 z-0 transition-all duration-400 ease-linear opacity-0 sm:group-hover:opacity-80 '>
    <div className='p-4 z-10'> 
    <h3 className='text-white font-poppins text-center text-sm lg:text-[20px] font-medium'>{upcoming ? title1 : title2}</h3>
    {/* <p className='text-white text-xs md:text-sm mt-2 '>{d.description}</p> */}
    
    </div>
   
   
   </div>

    </div>

    </Link>)
    }
    
   
  </div> 


</div>


        </div>
    </>
  )
}

export default Events