import {LuShoppingBasket} from "react-icons/lu";

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full bg-brand-5 rounded-lg">
            <LuShoppingBasket className='size-40'/>
            <h2 className='font-semibold text-2xl'>Your Basket is empty!</h2>
            <div></div>
        </div>
    );
}

export default EmptyCart;