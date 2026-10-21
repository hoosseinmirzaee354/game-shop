import DeleteTicket from "./DeleteTicket.jsx";

function TicketItem() {

    return (
        <form
            className="w-full h-20 flex items-center hover:bg-(--c-brand-1) transition-all duration-300 rounded-lg p-2 cursor-pointer">
            <div className='w-2/3'>
                <h5 className='text-lg font-semibold mb-1'>subject</h5>
                <span className="w-fit text-sm font-medium rounded-md px-2 py-0.5 bg-green-600">open</span>
            </div>

            <div className="w-1/3 h-full flex flex-col justify-between items-end">
                <p>2026/05/01</p>
                <DeleteTicket />
            </div>
        </form>
    );
}

export default TicketItem;