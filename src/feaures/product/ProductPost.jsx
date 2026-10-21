function ProductPost({title , text , image}) {
    return (
        <div className="flex flex-col items-center px-10 mb-15">
            <h1 className='text-4xl font-bold text-center mb-8'>
                {title}
            </h1>
            <p className='font-semibold mb-6 px-25'>
                {text}
            </p>
            <img className='w-full h-130 rounded-lg border border-c-brand-5 mb-4'
                 src={image} alt=""/>
        </div>
    );
}

export default ProductPost;