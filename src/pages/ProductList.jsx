import HeaderImage from "../ui/HeaderImage.jsx";
import FilterList from "../ui/FilterList.jsx";
import List from "../feaures/productsList/List.jsx";
import {useParams} from "react-router-dom";
import PageNotFound from "./PageNotFound.jsx";

function ProductList() {
    const {productType} = useParams();
    let boxType = ''
    let imageHeader = ''
    if (productType === 'games') {
        boxType = 'gameBox'
        imageHeader = '/img/bg/bg4.jpg'
    } else if (productType === 'gifts') {
        boxType = 'giftBox '
        imageHeader = '/img/bg/gift wallpaper.png'
    } else if (productType === 'news') {
        boxType = 'newsBox'
        imageHeader = '/img/bg/bg-test%20(5).jpg'
    }

    if (boxType === '') return <PageNotFound/>

    return (
        <>
            <HeaderImage title={productType} image={imageHeader}/>

            <div className='flex gap-6'>

                <aside className='w-1/5 '>
                    <FilterList>
                        <FilterList.Title title='Brands'/>
                        <FilterList.Container>
                            <FilterList.Item text='Microsoft' id={1}/>
                            <FilterList.Item text='Sony' id={2}/>
                            <FilterList.Item text='Xbox' id={3}/>
                            <FilterList.Item text='Ubisoft' id={4}/>
                        </FilterList.Container>
                    </FilterList>
                    <FilterList>
                        <FilterList.Title title='OS'/>
                        <FilterList.Container>
                            <FilterList.Item text='Microsoft' id={1}/>
                            <FilterList.Item text='Sony' id={2}/>
                            <FilterList.Item text='Xbox' id={3}/>
                            <FilterList.Item text='Ubisoft' id={4}/>
                        </FilterList.Container>
                    </FilterList>
                </aside>

                <div className='w-4/5 flex justify-center items-start'>
                    <List fullPage={false} box={boxType}/>
                </div>

            </div>
        </>
    );
}

export default ProductList;