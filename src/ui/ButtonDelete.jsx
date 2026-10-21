import {FaTrashAlt} from "react-icons/fa";

function ButtonDelete({size = 'md'}) {
    return (
        <button className="px-3 py-1 text-red-400 border border-red-400 rounded-md">
            <FaTrashAlt className={`text-${size}`} />
        </button>
    );
}

export default ButtonDelete;