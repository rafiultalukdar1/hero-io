import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
                loader: () => fetch('/appsData.json'),
                Component: Apps
            },
            {
                path: 'installation',
                element: <h1 className='text-5xl font-bold text-center'>Installation</h1>
            },
            {
                path: 'appsDetails/:id',
                loader: () => fetch('/appsData.json'),
                Component: AppsDetails
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
]);