import LineSeparator from "../../ui/LineSeparator.jsx";
import MarkedProductsBox from "./MarkedProductsBox.jsx";

function MarkedProducts() {
    return (
        <div className='w-2/3 bg-brand-2 rounded-lg p-2'>
            <h2 className='text-center text-3xl font-semibold my-4 '>Marked Products</h2>
            <LineSeparator/>
            <div className="min-h-100 max-h-150 overflow-y-auto flex flex-col items-center px-2 ">
                <MarkedProductsBox />
                <LineSeparator/>
                <MarkedProductsBox />
                <LineSeparator/>
                <MarkedProductsBox />
                <LineSeparator/>
                <MarkedProductsBox />
            </div>
        </div>
    );
}

export default MarkedProducts;