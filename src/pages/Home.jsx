import Slider from "../feaures/home/slider/Slider.jsx";
import Symbols from "../feaures/home/symbols/Symbols.jsx";
import List from "../feaures/productsList/List.jsx";
import Categories from "../feaures/home/categories/Categories.jsx";

function Home() {
    return (
        <>
            <Slider/>
            <Categories />
            <List title='Amazing Offers' type='flex' />
            <List title='All Games' />
            <List title='Latest News' box='newsBox'/>
            <List title='Latest Games' box='gameBox'/>
            <List title='Gift Cards' box='giftBox'/>
            <Symbols />
        </>
    );
}

export default Home;