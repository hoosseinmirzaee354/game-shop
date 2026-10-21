import {cloneElement} from "react";

function ProfileAsideButton({children, onClickOpenTab, icon}) {
    return <>
        <button onClick={onClickOpenTab}
                className='w-3/4 h-13 flex items-center gap-2 hover:bg-(--c-brand-4) transition-all duration-300 rounded-r-full pl-3 my-1'>

            {cloneElement(icon, {className: 'text-2xl'})}
            <p className='text-lg font-semibold'>{children}</p>

        </button>
    </>
}

export default ProfileAsideButton;