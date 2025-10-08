import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import HomePage from "../pages/HomePage/HomePage";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: HomePage
            },
            {
                path: 'apps',
                element: <h1 className='text-5xl font-bold text-center'>Apps</h1>
            },
            {
                path: 'installation',
                element: <h1 className='text-5xl font-bold text-center'>Installation</h1>
            }
        ]
    }
]);