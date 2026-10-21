import CategoryBoxMini from "../home/categories/CategoryBoxMini.jsx";
import {FaEye, FaInfo, FaWindows} from "react-icons/fa";
import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {HiOutlineCalendarDays} from "react-icons/hi2";

function ProfileOrderBox() {
    return (
        <div className='w-full flex items-center relative gap-4 px-2'>
            <img className='size-45 rounded-lg' src="/img/games/images%20(16).png" alt=""/>

            <div>
                <h1 className='text-3xl font-semibold mb-3'>Crew 2</h1>
                <CategoryBoxMini title='Win' icon={<FaWindows/>} theme='sky'/>
                <h5 className="flex items-center gap-1 my-3">
                    <FaInfo/>
                    This Account is Test For Sale !
                </h5>

                <h5 className="flex items-center gap-1 mb-2">
                    <HiOutlineCalendarDays />
                    2021 / 07 / 15 - 16 : 23
                </h5>

                <h2 className="text-xl font-semibold text-yellow-200">29.90 $</h2>
            </div>

            <ButtonIcon to='#' icon={<FaEye/>} type='roundWithoutBG'
                        customClasses='hover:text-blue-400 transition-all duration-300 absolute right-5'/>
        </div>
    );
}

export default ProfileOrderBox;