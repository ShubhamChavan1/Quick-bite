import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Body from './components/Body';
import Header from './components/Header';
import Error from './components/Error';
import ContactUS from './components/ContactUS';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Restaurant from './components/Restaurant';
import Shimmer from './components/shimmer';
import userContext from './utils/userContext';
import DarkContext from './utils/DarkContext';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {

    const [Theme, setTheme] = useState('white')

    const toggleTheme = () => {
        setTheme((prevtheme) => prevtheme === 'white' ? '#1d2a35' : 'white')
    }


    return (

        <div id="app">
            <DarkContext.Provider value={{ Theme, toggleTheme }}>
                <Header />
                <Outlet />
            </DarkContext.Provider>


        </div>


    );
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}>
                    <About name={"Shubham Chavan"} location={"Mumbai"} Role={"SDE 1"} />
                </Suspense>
            },
            {
                path: "/contactus",
                element: <ContactUS />
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant />
            },

            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>
    <RouterProvider router={AppRouter} />
</StrictMode>
)