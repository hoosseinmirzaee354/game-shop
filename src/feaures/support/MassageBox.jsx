import LineSeparator from "../../ui/LineSeparator.jsx";
import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {FiSend} from "react-icons/fi";
import UserMassage from "./UserMassage.jsx";
import SupportMassage from "./SupportMassage.jsx";

function MassageBox() {
    return (
        <div className='w-2/3 h-150 rounded-lg bg-brand-2 p-2'>
            <div className="flex flex-col items-center py-1">
                <h3 className='font-semibold text-2xl'>Conversation with support</h3>
                <p className='font-medium text-lg text-gray-400'>hossein mirzaie</p>
            </div>

            <LineSeparator/>

            <div className="w-full flex flex-col gap-2 h-100 overflow-y-auto px-6">

                <UserMassage/>
                <SupportMassage/>

            </div>

            <form className="w-full h-20 flex justify-center items-center gap-4">
                <input className='input w-2/3 h-12' placeholder="text ..."/>
                <ButtonIcon type='smallSecondary' icon={<FiSend/>}/>
            </form>
        </div>
    );
}

export default MassageBox;