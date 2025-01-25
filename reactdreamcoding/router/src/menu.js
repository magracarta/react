
import City from './pages/City';
import CityDetail from './pages/CityDetail';
import Go from './pages/Go';
import NoFound from './pages/NoFound';
import Root from './pages/Root';

export const menu = [
    {
        path:'/',
        element:<Root/>, 
        errorElement:<NoFound/>,
        children:[
            {
                path:"/go",
                element:<Go/>,
                children:[
                  {path:"city", element:<City/>},
                  {path:"city/:citydetail", element:<CityDetail/>},
                ]
              }
        ]
      },
      
];