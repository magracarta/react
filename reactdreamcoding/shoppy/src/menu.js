import App from "./App";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";

export const menu=[
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {index:true, element:<Home/>},
            {path:"/products", element:<AllProducts/>},
            {
                path:"/products/new", 
                element:
                <ProtectedRoute requireAdmin>
                    <NewProduct/>
                </ProtectedRoute>
            },
            {path:"/products/:id", element:<ProductDetail/>},
            {
                path:"/carts", 
                element:
                <ProtectedRoute>
                    <MyCart/>
                </ProtectedRoute>
            },
        ]
    }
]