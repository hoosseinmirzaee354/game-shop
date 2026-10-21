import {BsApple, BsPlaystation, BsWindows, BsXbox} from "react-icons/bs";
import CategoryBoxMini from "../home/categories/CategoryBoxMini.jsx";
import Button from "../../ui/Button.jsx";
import ShowPrice from "../../ui/ShowPrice.jsx";

function GameBox2() {
    return (
        <div className="w-65 h-78 bg-brand-1 border border-c-brand-5 rounded-xl flex flex-col items-center justify-between pb-2 mb-2">
            <img className='w-full h-40 rounded-tr-xl rounded-tl-xl ' src="/img/games/download%20(4).png" alt=""/>
            <h4 className='font-semibold text-xl'>Coll Of Duty Cold War</h4>

            <div className="flex gap-2 justify-around h-13">
                <CategoryBoxMini title='XBOX' theme='green' icon={<BsXbox />}/>
                <CategoryBoxMini title='PS' theme='blue' icon={<BsPlaystation />}/>
                <CategoryBoxMini title='MAC' theme='gray' icon={<BsApple/>}/>
                <CategoryBoxMini title='WIN' theme='sky' icon={<BsWindows />}/>
            </div>
            <div className="w-full h-10 flex items-center justify-between px-2">
                <Button to="/products/games/1" type='smallSecondary'>
                    Click for more info
                </Button>
                <ShowPrice />
            </div>
        </div>
    );
}

export default GameBox2;