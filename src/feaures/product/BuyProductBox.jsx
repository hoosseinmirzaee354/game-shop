import CategoryBoxMini from "../home/categories/CategoryBoxMini.jsx";
import Button from "../../ui/Button.jsx";
import {FaApple, FaWindows} from "react-icons/fa";

function BuyProductBox() {
    return (
        <div
            className="w-10/11 h-90 bg-brand-2 rounded-lg flex items-center gap-4 mb-20 -mt-25 px-5 py-4 sticky z-10">

            <div className="h-full w-1/3">
                <img className='h-full rounded-lg' src="/img/games/download%20(4).png" alt=""/>
            </div>

            <div className="w-2/3 h-full">
                <div
                    className="flex items-center justify-between flex-wrap w-full h-2/3 border-b border-c-brand-4 mb-3">
                    <p className='w-full font-semibold text-xl'>Game Features :</p>
                    <div>
                        <h4 className='font-semibold text-lg mb-2'>Maker :</h4>
                        <p className='pl-2'>Ubisoft</p>
                    </div>
                    <div className="Property__Device">
                        <h4 className='font-semibold text-lg mb-2'>Applicable devices :</h4>
                        <div className='flex gap-2'>
                            <CategoryBoxMini title='MAC' theme='gray' icon={<FaApple/>}/>
                            <CategoryBoxMini title='WIN' theme='blue' icon={<FaWindows/>}/>
                        </div>
                    </div>
                    <div className="Property__Region">
                        <h4 className='font-semibold text-lg mb-2'>Select Region :</h4>
                        <select name="">
                            <option value="">Turkey $39.00</option>
                            <option value="">Iran $29.00</option>
                            <option value="">Germany $59.00</option>
                        </select>
                    </div>
                    <div>
                        <h4 className='font-semibold text-lg mb-2'>Genre :</h4>
                        <p className='pl-2'>Strategic</p>
                    </div>
                </div>
                <div className="w-full h-1/3 flex items-center justify-between">
                    <Button to="#">Add To Cart</Button>
                    <p className='font-semibold text-2xl'><span className="text-yellow-200">$</span> 39.00</p>
                </div>
            </div>
        </div>
    );
}

export default BuyProductBox;