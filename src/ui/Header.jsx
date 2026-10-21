import {HiShoppingCart, HiUser} from "react-icons/hi";
import Logo from "./Logo.jsx";
import {PiListBold} from "react-icons/pi";
import InputSearch from "./InputSearch.jsx";
import ButtonIcon from "./ButtonIcon.jsx";

function Header() {
    return (
        <header className="bg-brand-2 px-6 py-2 uppercase">
            <div className='flex items-center justify-between mx-auto max-w-7xl '>
                <div className="w-20 flex items-center gap-4 justify-between">
                    <ButtonIcon to='/login' type='smallSecondary' icon={<HiUser/>}>Login</ButtonIcon>
                    <ButtonIcon to='/cart' type='roundWithoutBG' icon={<HiShoppingCart/>}/>
                </div>
                <Logo/>
                <div className='w-56 flex items-center gap-5 justify-end'>
                    <InputSearch/>
                    <PiListBold className='w-6 h-6'/>
                </div>
            </div>
        </header>
    );
}

export default Header;