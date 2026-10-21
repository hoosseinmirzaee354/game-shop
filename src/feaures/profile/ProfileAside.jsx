import {FaShoppingCart, FaSignOutAlt, FaTags, FaUser} from "react-icons/fa";
import ProfileAsideButton from "./ProfileAsideButton.jsx";

function ProfileAside({ onClickOpenTab }) {
    return (
        <div className="w-95 flex flex-col items-center gap-2 p-2 bg-brand-2 rounded-lg rounded-tl-[15%] ">

            <div className="h-30 flex items-center gap-4">
                <a className='w-1/3 flex justify-center items-center'>
                    <img className='size-25 rounded-full' src="/img/games/images%20(17).png" alt=""/>
                </a>
                <div>
                    <h2 className="text-yellow-200 font-semibold text-lg lg:text-2xl">Ho3ein_13_85</h2>
                    <h5 className="text-sky-500 font-medium text-sm lg:text-lg my-2">09934611837</h5>
                    <h6 className="text-sky-500 font-medium text-sm lg:text-lg">@Mahdi_USH@yahoo.com</h6>
                </div>
            </div>

            <div className='w-full'>
                <ProfileAsideButton onClickOpenTab={() => onClickOpenTab('profile')} icon={<FaUser/>}>Profile</ProfileAsideButton>
                <ProfileAsideButton onClickOpenTab={() => onClickOpenTab('orders')} icon={<FaShoppingCart/>}>Orders</ProfileAsideButton>
                <ProfileAsideButton onClickOpenTab={() => onClickOpenTab('markedProducts')} icon={<FaTags/>}>Marked Products</ProfileAsideButton>

                <button className='w-2/3 flex items-center gap-2 text-red-400 pl-3 mb-3 mt-5'>
                    <FaSignOutAlt className='text-2xl'/>
                    <p className='text-lg font-semibold'>Log Out</p>
                </button>
            </div>
        </div>
    );
}

export default ProfileAside;