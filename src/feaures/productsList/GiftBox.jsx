import Button from "../../ui/Button.jsx";
import ShowPrice from "../../ui/ShowPrice.jsx";

function GameBox2() {
    return (
        <div className="w-65 h-78 bg-brand-1 border border-c-brand-5 rounded-xl flex flex-col items-center justify-between pb-2 mt-5">
            <img className='w-full h-40 rounded-tr-xl rounded-tl-xl ' src="/img/games/download%20(4).png" alt=""/>
            <h4 className='font-semibold text-xl text-yellow-200 -mt-9'>Coll Of Duty Cold War</h4>

            <p className='px-2 text-center'>Gift Card Need For Charge Your Steam Account</p>

            <div className="w-full h-10 flex items-center justify-between px-2">
                <Button to="/products/gifts/1" type='small'>
                    Click for more info
                </Button>
                <ShowPrice />
            </div>
        </div>
    );
}

export default GameBox2;