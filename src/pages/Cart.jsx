import CartBox from "../feaures/cart/CartBox.jsx";
import PriceCartBox from "../feaures/cart/PriceCartBox.jsx";

function Cart() {
    return (
        <div className='flex gap-7 px-2 pb-10'>

           <PriceCartBox />

            <div className='w-4/5 flex flex-col justify-center gap-5'>
                <CartBox />
                <CartBox />
            </div>

        </div>
    );
}

export default Cart;