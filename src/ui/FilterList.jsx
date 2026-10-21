import LineSeparator from "./LineSeparator.jsx";
import {createContext, useContext, useEffect, useState} from "react";

const FilterListContext = createContext(null);

function FilterList({children}) {
    const [title, setTitle] = useState('');

    return (<FilterListContext.Provider value={{title, setTitle}}>
            <section className="bg-brand-2 rounded-lg px-4 py-1 mb-4">
                {children}
            </section>
        </FilterListContext.Provider>
    );
}

function FilterTitle({title}) {
    const {setTitle} = useContext(FilterListContext);
    useEffect(() => {
        setTitle(title);
    }, [setTitle, title]);
    return <>
        <div className="text-center mt-2">
            <h5 className="font-semibold text-lg text-yellow-200">{title}</h5>
        </div>
        <LineSeparator/>
    </>
}

function FilterContainer({children}) {
    return <ul>{children}</ul>;
}

function FilterItem({text, id}) {
    const {title} = useContext(FilterListContext);
    return <li className="flex items-center mb-2 pl-3">
        <input className='custom-checkbox invisible' type="checkbox" name='' id={`${title}-${id}`}/>
        <label
            className='group flex gap-2 items-center relative after:size-6 after:absolute after:border after:border-(--c-brand-4) after:rounded-full after:opacity-0 after:left-[-25px]
                before:absolute before:size-6 before:border before:border-(--c-brand-3) before:rounded-full before:left-[-25px]
                hover:after:opacity-100 hover:before:opacity-0 transition-all duration-500 cursor-pointer
               '
            htmlFor={`${title}-${id}`}>
            <h5 className='ml-1'>{text}</h5>
            <div className='size-4 bg-brand-4 rounded-full absolute left-[-21.5px] transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
        </label>
    </li>
}

FilterList.Title = FilterTitle;
FilterList.Container = FilterContainer;
FilterList.Item = FilterItem;

export default FilterList;