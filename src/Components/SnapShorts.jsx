import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../App.css"
import "../../Styles/custom-swiper-bullet.css"
import img1 from '../assets/banner.jpg'
import img2 from '../assets/team.jpeg'
import img3 from '../assets/bg1.jpeg'


const SnapShorts = () => {
const snapshortData = [
    
]

  return (
    <>
        <div className='bg- px-5 py-10 lg:px-20 lg:py-16 xl:px-36 xl:py-10 w-full'>
        <div className='flex justify-center'>
    <h1 className='text-3xl md:text-4xl font-josefin font-bold pb-7'>Snapshorts</h1>
</div>

<div className='flex justify-center items-center px-5 md:px-24 w-[100%] h-[50vw] md:h-[35vw] '>

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
    <div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%)`}} className='w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-xl'>
    <img src={img1}/>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%)`}} className='bg-gray-500 w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-xl'>
    <img src={img2}/>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div style={{ backgroundImage: `linear-gradient(rgb(3,3,3) 0%, rgba(8,7,8,0) 43.83%, rgb(3,3,3) 90.13%)`}} className='bg-gray-500 w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-xl '>
    <img src={img3}/>
    </div>
</SwiperSlide>


</Swiper>

</div>
        </div>
    </>
  )
}

export default SnapShorts