import {Link} from "react-router-dom";
import UpdateQuantity from "../../ui/UpdateQuantity.jsx";

function CartBox() {
    return (
        <div className='w-full flex items-start gap-4 bg-brand-2 rounded-lg p-3 relative'>
            <div className=" flex flex-col items-center">
                <img className='w-60 h-40 rounded-lg' src="/img/games/download%20(4).png" alt=""/>
                <div className='w-2/3 flex justify-center py-3 mt-5 border-t border-c-brand-4'>
                    <UpdateQuantity currentQuantity={1}/>
                </div>
            </div>

            <Link to="/products/games/1" className="min-w-100 h-2/3 pt-3 flex flex-col justify-between text-start">
                <div className='flex items-center gap-2'>
                    <span className='block bg-brand-4 w-1 h-2 rounded-lg'></span>
                    <h3 className="font-bold text-2xl">Dota 2</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='block bg-brand-4 w-1 h-2 rounded-lg'></span>
                    <p>dota 2</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='block bg-brand-4 w-1 h-2 rounded-lg'></span>
                    <p>guaranty</p>
                </div>
            </Link>

            <div className="h-1/2 pt-3 flex flex-col justify-between items-end font-semibold absolute right-3">
                <p className='flex items-center gap-2'>
                    10%
                    <span className='block size-2 rounded-l-lg bg-brand-4'></span>
                </p>
                <p className="line-through"> 1000.00 $</p>
                <p className='text-xl text-yellow-200'>900.00 $</p>
            </div>
        </div>);
}

export default CartBox;