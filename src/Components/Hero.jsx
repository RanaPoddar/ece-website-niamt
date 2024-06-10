import React from 'react'
import Navbar from './Navbar'
import img1 from '../assets/banner.jpg'
import img2 from '../assets/banner1.jpg'
import img3 from '../assets/banner2.jpg'
import img4 from '../assets/banner3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../App.css"
import "../../Styles/custom-swiper-bullet.css"


const data = [
    {
        image: {img1},
        quote: "This is a Quote .. Quote 1"
    }
]


const Hero = () => {
  return (
    <>
    <div className='w-full h-[70vh] md:h-[80vh] bg-black relative '>
    <div className='w-full z-10 absolute top-0 flex justify-center '>
        <Navbar/>
    </div>
    
<div style={{transform: "translate(-50%, -50%)"}} className='absolute top-[50%] left-[50%] flex flex-col justify-center z-10'>
    <h2 className='text-center text-2xl sm:text-3xl font-bold text-white font-josefin'>Department of </h2>
    <h2 className='text-center text-4xl sm:text-5xl font-bold text-white font-josefin'>Electronics and Computer</h2>
    <h2 className='text-center text-4xl sm:text-5xl font-bold text-white font-josefin'>Engineering</h2>
</div>


{/* background-image: linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%), url("https://images.pexels.com/photos/13534714/pexels-photo-13534714.jpeg?auto=compress&cs=tinysrgb&w=600"); */}
<Swiper
style={{
  "--swiper-pagination-color": "#F3F806",
  "--swiper-pagination-bullet-inactive-color": "#ffffff",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "12px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}

        spaceBetween={0}
        centeredSlides={true}
        loop="true"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

<SwiperSlide>
<div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url(${img1})`}} className='dark w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-end'>

<p className='text-white text-base sm:text-xl font-josefin font-semibold pb-14'>This is a Quote ... Quote 1</p>
</div>
</SwiperSlide>
<SwiperSlide>
<div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url(${img2})`}} className='dark w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-end'>

<p className='text-white text-base sm:text-xl font-josefin font-semibold pb-14'>This is a Quote ... Quote Number 2</p>
</div> 
</SwiperSlide>

<SwiperSlide>
<div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url(${img3})`}} className='dark w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-end'>

<p className='text-white text-base sm:text-xl font-josefin font-semibold pb-14'>This is a Quote ... Quote Number 3</p>
</div> 
</SwiperSlide>

<SwiperSlide>
<div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%) ,url(${img4})`}} className='dark w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-end'>

<p className='text-white text-base sm:text-xl font-josefin font-semibold pb-14'>This is a Quote ... Quote Number 4</p>
</div> 
</SwiperSlide>



</Swiper>

</div>
    
    </>
  )
}

export default Hero