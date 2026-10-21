import ShowPrice from "../../ui/ShowPrice.jsx";
import {Link} from "react-router-dom";

function GameBox({showDetails}) {

    let detailsStyle = {
        container: 'w-full h-12 group-hover:h-1/2 rounded-bl-2xl rounded-br-2xl',
        title : 'flex items-center justify-between',
        desc : ''
    }

    if (showDetails === 'right'){
        detailsStyle.container = 'h-full w-35 group-hover:w-2/3 rounded-tr-2xl rounded-br-2xl pt-6'
        detailsStyle.title = 'h-20 flex flex-col justify-between items-center'
        detailsStyle.desc = 'hidden group-hover:block transition-all duration-500'
    }

    return (
        <Link to='/products/games/1'
              className='min-w-90 max-w-90 h-full flex justify-center rounded-2xl overflow-hidden relative group'>
            <img className='w-full h-full' src="/img/games/download%20(3).png" alt=""/>
            <div
                className={`${detailsStyle.container} p-2 transition-all duration-500 absolute right-0 bottom-0 bg-slate-500/20 backdrop-blur-xs`}>
                <div className={`${detailsStyle.title} mb-3`}>
                    <h1 className='font-bold text-3xl'>Dota 2</h1>
                    <ShowPrice/>
                </div>
                <p className={`text-xs pl-3 pr-2 ${detailsStyle.desc}`}>Buy the best games at the best price and full time support from us Buy
                    the
                    best games at the best
                    price and full time support from us.</p>
            </div>
        </Link>
    );
}

export default GameBox;