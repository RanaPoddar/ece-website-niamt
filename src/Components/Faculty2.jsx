import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import madhuKumari from "../assets/faculty/madhuKumari.jpeg"
import vkg from "../assets/faculty/vkg.jpeg"
import rps from "../assets/faculty/rps.jpeg"
import ab from "../assets/faculty/ab.jpeg"
import sm from "../assets/faculty/sm.jpeg"
import dkp from "../assets/faculty/dkp.jpg"
import rm from "../assets/faculty/rm.jpg"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Faculty2 = () => {
    const facultyData = [
        {
            name: "Dr. Madhu Kumari",
            position: "Associate Professor",
            email: "madhuk@niamt.ac.in",
            phone: "0651-2292086",
            image : madhuKumari
        },
        {
            name: "Dr. Vikash Kumar Gupta",
            position: "Assistant Professor",
            email: "vikashkg@niamt.ac.in",
            phone: "+91 - 89866 66895",
            image : vkg
        },
        {
            name: "Dr. Ravinder Pal Singh",
            position: "Assistant Professor",
            email: "rpsingh@niamt.ac.in",
            phone: "+91-80591 66560",
            image : rps
        },
        {
            name: "Dr Shalini Mahato",
            position: "Assistant Professor",
            email: "smahato@niamt.ac.in",
            phone: "+91 7004778565",
            image : sm
        },
        {
            name: "Dr. Dinesh Kumar Prabhakar",
            position: "Assistant Professor",
            email: "dkprabhakar@niamt.ac.in",
            phone: "+91 9525052962",
            image : dkp
        },
        {
            name: "Mr. Abhishek Bakhla",
            position: "Assistant Professor",
            email: "abakhla@niamt.ac.in",
            phone: "+91-7070176142",
            image : ab
        },
        {
            name: "Dr. Rahul Mishra",
            position: "Assistant Professor",
            email: "rmishra@niamt.ac.in",
            phone: "+91 8802584376",
            image : rm
        },
    ]

    var settings = {
       
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
<>
    <div className='py-16 sm:py-16 md:py-20 lg:py-24 w-full'>
    <div className='flex justify-center'>
    <h1 className='text-3xl md:text-4xl font-josefin font-bold pb-1 lg:pb-7'>Faculty </h1>
</div>

{/* faculty main container */}
<div className='w-3/4 m-auto'>
<div className='mt-10'>
<Slider {...settings}>

{facultyData.map((d) => (
    <div className='flex flex-col justify-center p-5 '>
{/* Faculty Image */}
<div className='w-full flex justify-center'>
<div className='h-36 w-36 p-1 rounded-full'>
    <img className='h-full w-full obe rounded-full' src={d.image} />
</div>
</div>

{/* Faculty Details */}
<div className='text-center'>
<h2 className='text-lg font-semibold'>{d.name}</h2>
<h3 className="text-base font-medium">{d.position}</h3>
<p className='text-sm font-normal'>Email : {d.email}</p>
<p className='text-sm font-normal'>Phone : {d.phone}</p>
</div>

<div className='flex justify-center mt-4'>
<Link to="/faculty" className='flex justify-center' >
<h2 className='text-customBlueDark font-bold font-poppins text-sm'>Show Details</h2>
<MdOutlineKeyboardDoubleArrowRight className='text-customBlueDark text-xl'/> 
</Link>
</div>
</div>
))}

 </Slider>

</div>

</div>

    </div>
</>
  )
}

export default Faculty2