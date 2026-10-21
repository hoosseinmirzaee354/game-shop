import SliderDots from "./SliderDots.jsx";
import SliderImages from "./SliderImages.jsx";
import {useEffect, useState} from "react";

const slides = [
    {image: '/img/sliders/assassins-creed-main-1920x1100%203.jpg'},
    {image: '/img/sliders/rZ4vT2%202.jpg'},
    {image: '/img/sliders/Star-Wars-unsplash%202.jpg'},
    {image: '/img/sliders/rZ4vT2%202.jpg'},
    {image: '/img/sliders/Star-Wars-unsplash%202.jpg'},
];

function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);

    const changeActiveSlide = (index) => setActiveSlide(index)

    useEffect(() => {
        const id = setInterval(() => {
            changeActiveSlide(index => slides.length - 1 > index ? index + 1 : 0)
        }, 4000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="overflow-hidden mb-10 h-115 flex justify-center items-start relative">
            <SliderImages slides={slides} activeSlide={activeSlide}/>
            <SliderDots slides={slides} activeSlide={activeSlide} onChangeSlide={changeActiveSlide}/>
        </div>
    );
}

export default Slider;