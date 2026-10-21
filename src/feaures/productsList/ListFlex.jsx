import GameBox from "./GameBox.jsx";
import {Link} from "react-router-dom";

function ListFlex({title,showDetails}) {
    const [title1, title2] = title.split(' ');

    return (
        <>
            <div
                className="w-50 h-80 flex flex-col justify-between items-center bg-brand-1 px-2 py-3 rounded-bl-2xl rounded-tl-2xl custom-shadow my-10">
                <div className='text-center'>
                    <h2 className='font-bold text-3xl color-brand-4 mt-2'>{title1}</h2>
                    <h2 className='font-bold text-3xl color-brand-4 mt-2'>{title2}</h2>
                </div>
                <Link to='/products/games'>
                    View All <span className='font-semibold text-lg color-brand-4'>&gt;</span>
                </Link>
            </div>

            <div className='w-full h-76 flex items-center gap-6 overflow-x-auto scrollbar-none bg-brand-2 rounded-br-2xl rounded-tr-2xl px-4 py-6'>
                <GameBox showDetails={showDetails}/>
                <GameBox showDetails={showDetails}/>
                <GameBox showDetails={showDetails}/>
                <GameBox showDetails={showDetails}/>
                <GameBox showDetails={showDetails}/>
            </div>
        </>
    );
}

export default ListFlex;