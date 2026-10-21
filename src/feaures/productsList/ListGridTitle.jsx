function ListGridTitle({title}) {
    return (
        <div className="w-full flex flex-col items-center mb-4">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <span className='w-25 border-c-brand-4 border-b-3 mt-3'></span>
        </div>
    );
}

export default ListGridTitle;