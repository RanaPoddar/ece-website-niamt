import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../App.css"

const Faculty = () => {
const facultyData = [
    {
        name: "Dr. Madhu Kumari",
        position: "Associate Professor",
        email: "madhuk@niamt.ac.in",
        phone: "0651-2292086"
    },
    {
        name: "Dr. Vikash Kumar Gupta",
        position: "Assistant Professor",
        email: "vikashkg@niamt.ac.in",
        phone: "+91 - 89866 66895"
    },
    {
        name: "Dr. Ravinder Pal Singh",
        position: "Assistant Professor",
        email: "rpsingh@niamt.ac.in",
        phone: "+91-80591 66560"
    },
    {
        name: "Dr Shalini Mahato",
        position: "Assistant Professor",
        email: "smahato@niamt.ac.in",
        phone: "+91 7004778565"
    },
    {
        name: "Dr. Dinesh Kumar Prabhakar",
        position: "Assistant Professor",
        email: "dkprabhakar@niamt.ac.in",
        phone: "+91 9525052962"
    },
    {
        name: "Mr. Abhishek Bakhla",
        position: "Assistant Professor",
        email: "abakhla@niamt.ac.in",
        phone: "+91-7070176142"
    },
    {
        name: "Dr. Rahul Mishra",
        position: "Assistant Professor",
        email: "rmishra@niamt.ac.in",
        phone: "+91 8802584376"
    },
]

  return (
    <>
        <div className='px-5 py-10 w-full'>
        <div className='flex justify-center'>
    <h1 className='text-3xl md:text-4xl font-josefin font-bold pb-7'>Faculty </h1>
</div>
<div className='flex justify-center items-center'>

{/* Faculty Container */}
<div className='max-w-[1024px]'>
{/* Card Container */}
<Swiper
style={{
  
}}

      spaceBetween={25}
    breakpoints={
        {
            640: {
                width: 640,
                slidesPerView: 1
            },
            768 : {
                width: 768,
                slidesPerView: 2
            },
            1024 : {
                width: 1024,
                slidesPerView: 3
            },
        }
    }
      
      slidesPerGroup={1}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      loop="true"
        speed={2000}
        navigation={true}
        modules={[Autoplay, Navigation]}
        
    >

{facultyData.map((d) => (

<SwiperSlide>
    <div className='flex flex-col justify-center p-5 '>
{/* Faculty Image */}
<div className='w-full flex justify-center'>
<div className='h-36 w-36 p-1 rounded-full bg-gray-400'>
    <img className='h-full w-full obe rounded-full' src='' />
</div>
</div>

{/* Faculty Details */}
<div className='text-center'>
<h2 className='text-lg font-semibold'>{d.name}</h2>
<h3 className="text-base font-medium">{d.position}</h3>
<p className='text-sm font-normal'>Email : {d.email}</p>
<p className='text-sm font-normal'>Phone : {d.phone}</p>
</div>

</div>
</SwiperSlide>

))}

</Swiper>

</div>

</div>
       </div>
    </>
  )
}

export default Faculty