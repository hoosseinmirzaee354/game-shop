import Header from "./Header.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Spinner from "./Spinner.jsx";
import Footer from "./Footer.jsx";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            {isLoading && <Spinner/>}

            <Header/>

            <div className="overflow-y-auto">
                <main className="mx-auto max-w-7xl min-h-107 pt-4 px-2">
                    <Outlet/>
                </main>
                <Footer/>
            </div>

        </div>
    );
}

export default AppLayout;