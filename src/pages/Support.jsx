import Tickets from "../feaures/support/Tickets.jsx";
import MassageBox from "../feaures/support/MassageBox.jsx";
import {useState} from "react";
import NewTicket from "../feaures/support/NewTicket.jsx";

function Support() {
    const [showNewTicket, setShowNewTicket] = useState(false);

    function handleShowNewTicket(show) {
        setShowNewTicket(show);
    }

    return (
        <div className="flex justify-center items-center mb-10 relative">

            <div className="w-full flex justify-center items-center gap-4">

                <Tickets onClickShowNewTicket={handleShowNewTicket}/>

                <MassageBox/>

            </div>

            {showNewTicket && <NewTicket onClickShowNewTicket={handleShowNewTicket}/>}

        </div>
    )
}

export default Support;
