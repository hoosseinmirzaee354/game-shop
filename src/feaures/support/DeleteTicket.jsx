import {FaTrashAlt} from "react-icons/fa";
import ButtonDelete from "../../ui/ButtonDelete.jsx";
import {useState} from "react";

function DeleteTicket() {
    const [showDelete, setShowDelete] = useState(false);

    if (showDelete)
        return <div className="flex gap-4">
            <ButtonDelete size='sm'/>
            <p
                onClick={() => setShowDelete(false)}
                className='px-3 py-1 border border-c-brand-3 rounded-md cursor-pointer'>No</p>
        </div>
    else
        return <div className="pr-2">
            <FaTrashAlt
                onClick={() => setShowDelete(true)}
                className='text-red-400 text-lg cursor-pointer'/>
        </div>
}

export default DeleteTicket;