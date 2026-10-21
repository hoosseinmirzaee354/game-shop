import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {BiRightArrowAlt} from "react-icons/bi";
import {HiHeart} from "react-icons/hi";

function CommentBox() {
    return (
        <div className="flex flex-col items-center gap-4 bg-brand-5 rounded-lg px-5 py-4 mb-4">
            <div className="w-full flex justify-between items-center">
                <h4>Mohammed</h4>
                <p>Wednesday 20 / 01 / 2023</p>
            </div>
            <p className='w-full my-2'>I think this game was great.</p>

            <div className="w-full flex justify-between items-center">
                <ButtonIcon icon={<BiRightArrowAlt/>} iconPlace='right'
                            type='smallSecondary'>Reply</ButtonIcon>
                <HiHeart
                    className='fill-none stroke-1 stroke-sky-50 hover:stroke-red-500 hover:fill-red-500 transition-all duration-500 size-8 cursor-pointer'/>
            </div>
        </div>
    );
}

export default CommentBox;