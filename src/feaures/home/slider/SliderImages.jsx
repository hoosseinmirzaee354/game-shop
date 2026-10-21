import {Link} from "react-router-dom";
import SliderBoxDetails from "./SliderBoxDetails.jsx";

function SliderImages({slides, activeSlide}) {
    return (
        <div className='w-full relative flex justify-center items-center h-full'>
            {slides.map((slide, index) => (
                <Link to='#'
                      className={`absolute flex justify-center items-center
                      ${0 === index ? 'block h-[90%] w-[20%] blur-xs right-0'
                          : 1 === index ? 'block group w-[70%] h-full z-10'
                              : 2 === index ? 'block h-[90%] w-[20%] blur-xs left-0'
                                  : 'hidden'}
                        `}
                      key={index}>
                    <img className='w-full h-full rounded-lg' src={
                        0 === index ? slides.at(activeSlide - 1)?.image || slides.at(slides.length - 1).image
                            : 1 === index ? slides.at(activeSlide ).image
                                : 2 === index ? slides.at(activeSlide + 1)?.image || slides.at(0).image
                                    : 'no image'
                    } alt=""/>
                    <SliderBoxDetails/>
                </Link>
            ))}
        </div>
    );
}

export default SliderImages;