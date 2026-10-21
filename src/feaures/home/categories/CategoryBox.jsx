import {Link} from "react-router-dom";
import {cloneElement} from "react";

function CategoryBox({title, theme, icon}) {
    const colors = {
        green: {
            bg : 'to-green-700',
            color: 'text-green-500',
            fill: 'fill-green-500'
        },
        sky: {
            bg : 'to-sky-700',
            color: 'text-sky-500',
            fill: 'fill-sky-500'
        },
        gray: {
            bg : 'to-gray-700',
            color: 'text-gray-500',
            fill: 'fill-gray-500'
        },
        blue: {
            bg : 'to-blue-700',
            color: 'text-blue-500',
            fill: 'fill-blue-500'
        },
    }

    return (
        <Link to="/products/games" className={`w-full flex gap-3 justify-center items-center bg-linear-to-r from-mist-900 ${colors[theme].bg}`}>
            {cloneElement(icon , {className: `size-18 ${colors[theme].fill}`})}
            <div className="flex flex-col">
                <p className={`font-semibold text-3xl ${colors[theme].color}`}>{title}</p>
                <p className="">View Games</p>
            </div>
        </Link>
    );
}

export default CategoryBox;