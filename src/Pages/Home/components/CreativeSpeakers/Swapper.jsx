import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import dataSpeakers from 'yourStyled/components/CreativeSpeakers/dataCreativeSpeakers';
import CreativeSpeakers from 'yourStyled/components/CreativeSpeakers/CreativeSpeakers';

export default function Swapper() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      autoplay={{delay: 2500, disableOnInteraction: false}}
      modules={[Autoplay]}
      style={{marginTop: '3rem'}}
    >
      {
        dataSpeakers.map((e) => {
          return (
            <SwiperSlide>
              <CreativeSpeakers image={e.image} name={e.name} job={e.job} key={e.id}/>   
            </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
}
