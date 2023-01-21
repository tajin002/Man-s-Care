import About from "../Components/About/About";
import Cart from "../Components/Cart/Cart";
import Error from "../Components/ErrorPage/Error";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import Shop from "../Components/Shop/Shop";
import { productsAndCarts } from "../Loaders/productsAndCarts";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        errorElement : <Error />,
        loader:productsAndCarts,
        children : [
            {path: '/' , element: <Home />},
            {path: 'home' , element: <Home />},
            {path : 'shop' , element : <Shop />},
            {path : 'cart' , element: <Cart />},
            {path: 'about', element: <About />}
        ]
    }
])