import Button from "../../ui/Button.jsx";
import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {FiSend} from "react-icons/fi";

function NewCommentBox() {
    return (
        <div className="w-2/3 absolute hidden bg-brand-2 shadow-2xl rounded-lg px-5 py-4">
            <div className="flex justify-center flex-wrap">
                <div className='w-1/2 px-4 py-2'>
                    <p>Name</p>
                    <input className='input w-full mt-1 mb-3' placeholder='Your Name' type="text"/>
                </div>
                <div className='w-1/2 px-4 py-2'>
                    <p>E-mail</p>
                    <input className='input w-full mt-1 mb-3' placeholder='Your E-Mail' type="text"/>
                </div>
                <div className='w-full px-4 mb-4'>
                    <p>Write a new comment</p>
                    <textarea className='textarea mt-1 w-full h-40' name=""></textarea>
                </div>
                <div className='flex items-center gap-4'>
                    <Button type='secondary'>Cancel</Button>
                    <ButtonIcon to='#' iconPlace='right' icon={<FiSend/>}>Send</ButtonIcon>
                </div>
            </div>
        </div>
    );
}

export default NewCommentBox;