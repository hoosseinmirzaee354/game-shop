import LineSeparator from "../../ui/LineSeparator.jsx";
import Button from "../../ui/Button.jsx";
import TicketItem from "./TicketItem.jsx";

function Tickets({onClickShowNewTicket}) {
    return (
        <div className="w-1/3 h-150 rounded-lg bg-brand-2 p-2">

            <div className="flex justify-between items-center py-1 px-2">
                <h3 className='font-semibold text-2xl'>Tickets</h3>
                <Button type='smallSecondary' onClick={() => onClickShowNewTicket(true)}>new ticket</Button>
            </div>

            <LineSeparator/>

            <div className='w-full flex flex-col gap-2 h-125 overflow-y-auto'>
                <TicketItem />
            </div>

        </div>
    );
}

export default Tickets;