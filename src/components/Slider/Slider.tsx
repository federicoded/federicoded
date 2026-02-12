import "./Slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

type slideContent = {
    pic: string,
    alt: string
}
type SliderProps = {
    slide_pics: slideContent[]
}

const Slider = (SliderProps: SliderProps) => {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {
                    SliderProps.slide_pics.map((item, i) =>
                    (<>
                        <SwiperSlide className="eslaid" key={i}>
                            <img src={item.pic} alt={item.alt}></img>
                        </SwiperSlide>
                    </>))
                }
            </Swiper>
        </>
    )
}

export default Slider;