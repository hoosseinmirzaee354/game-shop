import {cloneElement} from "react";

function SymbolItem({icon, iconText , iconIsStroke = false}) {
    return (
        <div className='flex justify-center items-center flex-wrap gap-4 py-2 '>
            <div className='w-30 h-30 flex flex-col gap-2 items-center bg-cyan-950 rounded-full pt-5 custom-shadow'>
                {cloneElement(icon, {className: `size-12 ${iconIsStroke ? 'stroke-brand-4' : 'fill-brand-4'}`})}
                <p className='text-xs'>{iconText}</p>
            </div>
        </div>
    );
}

export default SymbolItem;