
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import slide1 from "../assets/images/carousel1.jpg";
import slide2 from "../assets/images/carousel2.jpg";
import slide3 from "../assets/images/carousel3.jpg";

const Carousel = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={slide1} text='Get Your Web Development Projects Done in minutes'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide2} text='Get Your Graphics Design Projects Done in minutes'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide3} text='Start Your Digital Marketing Campaigns up n running'></Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;