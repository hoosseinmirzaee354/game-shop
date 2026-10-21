import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./pages/Home.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import Support from "./pages/Support.jsx";


const router = createBrowserRouter([{
    element: <AppLayout/>,
    errorElement: <PageNotFound />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/products/:productType',
            element: <ProductList/>
        },
        {
            path: '/products/:productType/:productId',
            element: <Product/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/support',
            element: <Support/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
}])

function App() {
    return <RouterProvider router={router}/>
}

export default App;