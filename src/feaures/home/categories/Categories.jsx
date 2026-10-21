import CategoryBox from "./CategoryBox.jsx";
import {BsApple, BsPlaystation, BsWindows, BsXbox} from "react-icons/bs";

function Categories() {
    return (
        <div className='flex gap-5 h-40 my-8'>
            <CategoryBox title='XBOX' theme='green' icon={<BsXbox />}/>
            <CategoryBox title='PS' theme='blue' icon={<BsPlaystation />}/>
            <CategoryBox title='MAC' theme='gray' icon={<BsApple/>}/>
            <CategoryBox title='WIN' theme='sky' icon={<BsWindows />}/>
        </div>
    );
}

export default Categories;