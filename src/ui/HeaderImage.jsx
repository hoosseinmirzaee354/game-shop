function HeaderImage({title , image}) {
    return (
        <div className="mb-10">
            <div className='max-h-90 relative flex justify-center items-center'>
                <img className='rounded-md w-full max-h-90 ' src={image} alt=""/>
                <div className="h-5 w-full absolute -top-2 bg-slate-800 blur-sm"></div>
                <div className="h-5 w-full absolute -bottom-2 bg-slate-800 blur-sm "></div>
                <div className="w-5 h-full absolute -left-2 bg-slate-800 blur-sm "></div>
                <div className="w-5 h-full absolute -right-2 bg-slate-800 blur-lg "></div>
                <h1 className="w-full text-center text-8xl font-semibold tracking-[40px] uppercase text-yellow-200 text-shadow-lg text-shadow-amber-300 absolute bottom-20">{title}</h1>
            </div>
        </div>
    );
}

export default HeaderImage;