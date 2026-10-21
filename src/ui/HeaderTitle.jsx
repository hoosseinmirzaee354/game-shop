function HeaderImage({title}) {
    return (
        <div className=" flex flex-col items-center mb-20">
            <h1 className="w-full text-center text-8xl font-semibold tracking-[40px] uppercase text-yellow-200 text-shadow-lg text-shadow-amber-300">{title}</h1>
            <div className='w-50 border-yellow-200 border-b-5 mt-5'></div>
        </div>
    );
}

export default HeaderImage;