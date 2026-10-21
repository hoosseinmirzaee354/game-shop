import Button from "../../ui/Button.jsx";

function PriceCartBox() {
    return (
        <div className="w-1/5">
            <div className="bg-brand-2 rounded-lg px-3 py-4">
                <div className='flex justify-between items-center mb-3'>
                    <p>All Price :</p>
                    <p>110.00 $</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Discount :</p>
                    <p>10.00 $</p>
                </div>
            </div>
            <div className="bg-brand-5 rounded-lg px-3 py-4 flex justify-between items-center my-3">
                <p>Fee :</p>
                <p>100.00 $</p>
            </div>
            <Button customClasses='w-full'>Continue</Button>
        </div>

    );
}

export default PriceCartBox;