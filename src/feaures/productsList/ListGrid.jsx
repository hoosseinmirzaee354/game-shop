import ListGridTitle from "./ListGridTitle.jsx";
import GameBox2 from "./GameBox2.jsx";
import Button from "../../ui/Button.jsx";
import GiftBox from "./GiftBox.jsx";
import NewsBox from "./NewsBox.jsx";

function ListGrid({title, box, fullPage}) {
    let style = 'flex gap-4 justify-between flex-wrap';
    if (fullPage) {
        style = 'w-full flex flex-wrap justify-between gap-4 max-h-170 overflow-hidden my-5'
        if (box === 'newsBox')
            style = 'w-full grid grid-cols-1 max-h-215 overflow-hidden px-4 my-5'
    }

    const linkAll = box === 'gameBox'
        ? '/products/games' : box === 'giftBox'
            ? '/products/gifts'
            : '/products/news';

    return (
        <div className='flex flex-col items-center w-full mb-10'>
            {title !== '' && <ListGridTitle title={title}/>}
            <div className={style}>
                {box === 'gameBox' && <>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                    <GameBox2/>
                </>
                }
                {box === 'giftBox' && <>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                    <GiftBox/>
                </>
                }
                {box === 'newsBox' && <>
                    <NewsBox/>
                    <NewsBox/>
                    <NewsBox/>
                </>
                }
            </div>
            {fullPage && <Button to={linkAll} customClasses='mt-8'>View All</Button>}
        </div>
    )
}

export default ListGrid;