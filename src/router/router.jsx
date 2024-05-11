import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Products from "../pages/Products";
import CardDetail from "../pages/CardDetail";
import Cart from "../pages/Cart";
import About from "../pages/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:id',
        element: <CardDetail />
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/about',
        element: <About />
    }
])