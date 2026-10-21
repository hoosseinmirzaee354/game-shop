import ListGrid from "./ListGrid.jsx";
import ListFlex from "./ListFlex.jsx";

function List({title ='', type = 'grid' ,box = 'gameBox' , fullPage = true, showDetails = 'bottom'}) {

    return (
        <div className='flex justify-center items-center pb-5 '>

            {type === "grid"
                ? <ListGrid title={title} box={box} fullPage={fullPage}/>
                : <ListFlex title={title} showDetails={showDetails}/>}

        </div>
    );
}

export default List;