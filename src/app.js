import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Body from './components/Body';
import Header from './components/Header';
import Error from './components/Error';
import ContactUS from './components/ContactUS';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Restaurant from './components/Restaurant';
import userContext from './utils/userContext';
import DarkContextProvider from './utils/DarkContextProvider';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {

    return (

        <div id="app">
            <Provider store={appStore}>
                <DarkContextProvider >
                    <userContext.Provider value={{ loggedInUser: "shubham chavan" }}>
                        <Header />
                        <Outlet />
                    </userContext.Provider>
                </DarkContextProvider>
            </Provider>
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
                  path:"/cart",
                  element:<Cart/>
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