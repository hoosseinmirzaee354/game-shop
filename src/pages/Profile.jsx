import ProfileAside from "../feaures/profile/ProfileAside.jsx";
import ProfileBox from "../feaures/profile/ProfileBox.jsx";
import HeaderImage from "../ui/HeaderImage.jsx";
import Orders from "../feaures/profile/Orders.jsx";
import {useState} from "react";
import MarkedProducts from "../feaures/profile/MarkedProducts.jsx";

function Profile() {
    const [openTab, setOpenTab] = useState('profile');

    const handleClickOpenTab = (tabName) => setOpenTab(tabName)

    return (
        <>
            <HeaderImage title='Hossein' image='/img/bg/Profile.jpg'/>
            <div className='flex items-start gap-4 mb-10'>
                <ProfileAside onClickOpenTab={handleClickOpenTab}/>
                {openTab === 'profile' && <ProfileBox />}
                {openTab === 'orders' && <Orders />}
                {openTab === 'markedProducts' && <MarkedProducts />}
            </div>
        </>
    );
}

export default Profile;