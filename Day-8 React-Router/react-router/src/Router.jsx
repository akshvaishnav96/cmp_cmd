
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { createBrowserRouter } from "react-router-dom"
import SingleProduct from "./Pages/SingleProduct";
import ProductsOutlet from "./Outlets/ProductsOutlet";
import Navbar from "./componenets/Navbar"
import NotFound from "./Pages/NotFound";
import axios from "axios"
import Contact from "./Pages/Contact";

async function getProducts() {

    const data = await axios.get(`https://fakestoreapi.com/products`)
    return data.data
}


async function getSingleProduct(event) {
    const { id } = event.params
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data.data

}

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/products",
                element: <ProductsOutlet />,
                children: [
                    {
                        path: ":id",
                        element: <SingleProduct />,
                        loader: (id) => getSingleProduct(id),
                    },
                    {
                        index: true,
                        element: <Products />,
                        loader: getProducts
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }]
    }



]);

