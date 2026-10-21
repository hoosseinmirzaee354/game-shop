import ShowPrice from "../../../ui/ShowPrice.jsx";

function SliderBoxDetails() {
    return (
        <div
            className='absolute w-80 h-55 invisible group-hover:visible transition-all duration-300 bg-stone-950 opacity-85 rounded-2xl text-center px-5 py-2'>
            <h1 className='font-semibold text-3xl mb-1'>Assassin's Creed</h1>
            <h3 className='font-medium text-xl mb-5'>Activision</h3>
            <p className='text-xs mb-7'>Buy the best games at the best price and full time support from us Buy the best
                games at the best price
                and full time support from us.</p>
            <div className='flex items-center justify-between'>
                <p className='font-medium text-xl'>More Details</p>
                <ShowPrice/>
            </div>
        </div>
    );
}

export default SliderBoxDetails;
