function SliderDots({slides, activeSlide, onChangeSlide}) {
    return <div className='absolute bottom-4 flex justify-center items-center gap-2 z-20'>
        {slides.map((_, index) =>
            <button className={`dots ${activeSlide === index && 'activeDot'}`} key={index}
                 onClick={() => onChangeSlide(index)}>
                <span></span>
            </button>
        )}
    </div>
}

export default SliderDots;