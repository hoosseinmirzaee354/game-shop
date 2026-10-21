import LineSeparator from "../../ui/LineSeparator.jsx";
import {BiX} from "react-icons/bi";
import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {FiSend} from "react-icons/fi";

function NewTicket({onClickShowNewTicket}) {
    return (<>
        <span className='w-full h-full absolute bg-stone-300/20 backdrop-blur-xs'></span>

        <form className="w-1/2 absolute bg-brand-2 border-3 border-c-brand-5 rounded-lg px-4 py-2">
            <button type='reset'
                    onClick={() => onClickShowNewTicket(false)}
                    className="px-1.5 py-1 -ml-2 border border-c-brand-4 color-brand-4 text-2xl rounded-md cursor-pointer">
                <BiX/>
            </button>
            <div className='-mt-6'>
                <h3 className='text-center text-2xl font-semibold mb-3'>New Ticket</h3>

                <LineSeparator/>

                <div className="flex flex-col gap-4 items-center pb-2">

                    <div className='flex flex-col gap-2 w-3/4'>
                        <label htmlFor='subject'>Subject</label>
                        <input className='input bg-brand-1 w-full' type="text" id='subject'/>
                    </div>

                    <div className='flex flex-col gap-2 w-3/4'>
                        <label htmlFor='firstMassage'>Massage</label>
                        <textarea className='textarea bg-brand-1 min-h-30 max-h-30' id="firstMassage"></textarea>
                    </div>

                    <ButtonIcon type='smallSecondary' icon={<FiSend/>} iconPlace='right'>create</ButtonIcon>
                </div>
            </div>
        </form>
    </>);
}

export default NewTicket;