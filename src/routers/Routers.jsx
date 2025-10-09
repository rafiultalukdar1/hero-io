import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Installation from "../pages/Installation/Installation";


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
                loader: () => fetch('/appsData.json'),
                Component: Installation
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