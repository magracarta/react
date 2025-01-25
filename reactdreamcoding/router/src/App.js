import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { menu } from './menu';

const router = createBrowserRouter(menu);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
