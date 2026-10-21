function ProductHeader({title ,image}) {
    return (
        <div className="mb-10">
            <div className='relative flex justify-center items-center'>
                <img className='rounded-md' src={image} alt=""/>
                <div className="h-5 w-full absolute -top-2 bg-slate-800 blur-sm"></div>
                <div className="h-5 w-full absolute -bottom-2 bg-slate-800 blur-sm "></div>
                <div className="w-5 h-full absolute -left-2 bg-slate-800 blur-sm "></div>
                <div className="w-5 h-full absolute -right-2 bg-slate-800 blur-lg "></div>
                <h1 className="w-full text-center text-5xl font-semibold tracking-widest uppercase text-yellow-200 absolute bottom-20">{title}</h1>
            </div>
        </div>
    );
}

export default ProductHeader;