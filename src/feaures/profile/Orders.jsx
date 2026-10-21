import LineSeparator from "../../ui/LineSeparator.jsx";
import ProfileOrderBox from "./ProfileOrderBox.jsx";
import {useState} from "react";
import InProgressOrders from "./InProgressOrders.jsx";
import FinishedOrders from "./FinishedOrders.jsx";
import CanceledOrders from "./CanceledOrders.jsx";

function Orders() {
    const [openTabOrder, setOpenTabOrder] = useState('inProgress');

    return (
        <div className='w-2/3 bg-brand-2 rounded-lg p-2'>
            <h2 className='text-center text-3xl font-semibold mb-4'>Orders</h2>

            <div className="flex items-center mb-3 bg-brand-5">
                <button onClick={() => setOpenTabOrder('inProgress')}
                        className={`w-1/3 h-13 hover:bg-(--c-brand-1) transition-all duration-300 ${openTabOrder === 'inProgress' && 'activeProfileOrder'}`}>In
                    Progress
                </button>
                <button onClick={() => setOpenTabOrder('finished')}
                        className={`w-1/3 h-13 hover:bg-(--c-brand-1) transition-all duration-300 ${openTabOrder === 'finished' && 'activeProfileOrder'}`}>Finished
                </button>
                <button onClick={() => setOpenTabOrder('canceled')}
                        className={`w-1/3 h-13 hover:bg-(--c-brand-1) transition-all duration-300 ${openTabOrder === 'canceled' && 'activeProfileOrder'}`}>Canceled
                </button>
            </div>

            {openTabOrder === 'inProgress' && <InProgressOrders />}
            {openTabOrder === 'finished' && <FinishedOrders />}
            {openTabOrder === 'canceled' && <CanceledOrders />}

        </div>
    );
}

export default Orders;