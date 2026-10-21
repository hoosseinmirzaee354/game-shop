import Comments from "../feaures/product/Comments.jsx";
import ProductPost from "../feaures/product/ProductPost.jsx";
import BuyProductBox from "../feaures/product/BuyProductBox.jsx";
import ProductHeader from "../feaures/product/ProductHeader.jsx";
import {useParams} from "react-router-dom";
import PageNotFound from "./PageNotFound.jsx";

function Product() {
    const {productType} = useParams();
    let boxType = productType === 'games' ? 'gameBox' : '';

    if (boxType === '') return <PageNotFound/>

    return (
        <div className='flex flex-col items-center'>
            <ProductHeader title='Assassin`s Creed Origin' image='/img/sliders/assassins-creed-main-1920x1100%203.jpg'/>

            <BuyProductBox/>

            <ProductPost
                title="The group, of which the main character of the game
                is a member , hacks underground corporations and"
                image="/img/sliders/Star-Wars-unsplash%202.jpg"
                text="The group, of which the main character of the game
                is a member , hacks underground corporations and
                The group, of which the main character of the game
                is a member , hacks underground corporations and
                The group, of which the main character of the game
                is a member , hacks underground corporations and
                The group, of which the main character of the game"
            />

            <Comments/>
        </div>
    );
}

export default Product;