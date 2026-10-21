import {HiSearch} from "react-icons/hi";

function InputSearch() {
    return (<div className='relative flex items-center'>
        <input type="text" className='w-44 bg-brand-3 color-brand-1 rounded-xl px-4 py-1 hidden sm:block'
               placeholder='search ...'/>
        <span className='absolute right-2 rounded-full bg-brand-3 flex items-center justify-center w-8 h-7.5'>
                <HiSearch className='icon-search'/>
            </span>
    </div>);
}

export default InputSearch;