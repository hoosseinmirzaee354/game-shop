import {Link} from "react-router-dom";
import {cloneElement} from "react";

function CategoryBox({title, theme = 'gray', icon}) {
    const colors = {
        green: {
            color: 'text-green-500',
            fill: 'fill-green-500'
        },
        sky: {
            color: 'text-sky-500',
            fill: 'fill-sky-500'
        },
        gray: {
            color: 'text-gray-500',
            fill: 'fill-gray-500'
        },
        blue: {
            color: 'text-blue-500',
            fill: 'fill-blue-500'
        },
    }

    return (
        <Link to="#" className={`w-1/4 flex gap-1 justify-center items-center`}>
            {cloneElement(icon , {className: `size-5 ${colors[theme].fill}`})}
            <div className="flex flex-col">
                <p className={`font-semibold ${colors[theme].color}`}>{title}</p>
            </div>
        </Link>
    );
}

export default CategoryBox;