import SymbolItem from "./SymbolItem.jsx";
import {BsCashCoin, BsShop} from "react-icons/bs";
import {TbCashBanknoteMoveBack, TbShieldDollar} from "react-icons/tb";
import {AiFillDashboard} from "react-icons/ai";

function Symbols() {
    return (
        <div className="flex items-center justify-around my-10">
            <SymbolItem icon={<BsCashCoin/>} iconText='Sell Gift Cards'></SymbolItem>
            <SymbolItem icon={<BsShop/>} iconText='Buy Gift Cards'></SymbolItem>
            <SymbolItem icon={<AiFillDashboard/>} iconText='Quick Buy'></SymbolItem>
            <SymbolItem icon={<TbShieldDollar/>} iconIsStroke={true} iconText='Safe Purchase'></SymbolItem>
            <SymbolItem icon={<TbCashBanknoteMoveBack />} iconIsStroke={true} iconText='Cash back'></SymbolItem>
        </div>
    );
}

export default Symbols;