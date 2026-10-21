import Button from "../../ui/Button.jsx";

function NewsBox() {
    return (
        <div className="flex text-justify w-full h-65 mb-3 border border-c-brand-5 bg-brand-2 rounded-lg ">
            <img className='w-100 rounded-bl-md rounded-tl-md' src="/img/games/download%20(3).png" alt=""/>
            <div className='p-3 flex flex-col justify-between'>
                <h4 className='font-semibold text-2xl line-clamp-2'>Assassins Creed Valhalla : Wrath of the Druids</h4>
                <p className="font-semibold line-clamp-3">
                    There are many factors of the game worth considering
                    Which includes skins, weapons, map alterations and plenty
                    More as the successful battle royale There are many factors
                    Of thr game worthconsidering which plenty more as the
                    Of thr game worthconsidering which plenty more as the
                    Successful battle royale There are many factors
                    includes skins, weapons . . .
                </p>
                <div className="h-10 flex items-center justify-between">
                    <p className="OX">By <span className="txt_Persian">Epic Games</span> - JAN 15, 2021</p>
                    <Button to="/products/news/1" type='secondary'>READ MORE</Button>
                </div>
            </div>
        </div>
    );
}

export default NewsBox;