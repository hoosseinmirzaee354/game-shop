import ButtonIcon from "./ButtonIcon.jsx";
import {BiMinus, BiPlus} from "react-icons/bi";

function UpdateQuantity({currentQuantity}) {

    return (
        <div className="flex gap-2 md:gap-3 items-center">
            <ButtonIcon type="round" icon={<BiMinus/>}/>
            <span className="font-medium mx-2">{currentQuantity}</span>
            <ButtonIcon type="round" icon={<BiPlus/>}/>
        </div>
    );
}

export default UpdateQuantity;