import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import Broadband from '../assets/images/communication-tower.jpg'
import capture from '../assets/images/capture.jpg'
import security from '../assets/images/security.jpg'
import software from '../assets/images/software.jpg'
import SmartClass from '../assets/images/Smart-classroom.png'
import video from '../assets/images/video.jpg'
import smartId from '../assets/images/smartId.jpeg'
import dataCenter from '../assets/images/datacenter.jpeg'
import snos from '../assets/images/snos_flyer.png'

const Hero = () => {
    return ( 
        <header className="hero mb-20 relative">
            <div className="absolute top-0 left-0 w-full h-screen bg-blue-950"></div>
            <Swiper
            // Add Swiper modules
            modules={[Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay:3000 }}
            loop={true}
            >
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInLeft animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:left-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>BroadBand Connectivity</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={Broadband} alt="Broadband" className='w-full h-screen object-cover object-bottom opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInRight animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:right-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Smart Classroom</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={SmartClass} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInLeft animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:left-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Data Center</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
            <   img src={dataCenter} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />

            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInRight animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:right-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Video Conferencing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={video} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInLeft animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:left-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Software and Web </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={software} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInRight animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:right-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-4/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Identity Capture & Tracking</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={capture} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInLeft animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:left-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Smart Identity</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={smartId} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className="animate__animated animate__backInRight animate__slow hero-text   md:block absolute top-[30%] md:top-[40%] md:right-[10%] bg-blue-900/60 z-10 p-4 md:p-6 rounded-md w-full md:w-3/6 text-white">
                    <h2 className='text-2xl md:text-5xl font-bold my-3'>Security</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis eum natus facilis necessitatibus dignissimos maiores et quidem ipsum officiis.</p>
                </div>
                <img src={security} alt="smartclass" className='w-full h-screen object-cover opacity-[0.3]' />
            </SwiperSlide>

            </Swiper>
        </header>
     );
}
 
export default Hero;