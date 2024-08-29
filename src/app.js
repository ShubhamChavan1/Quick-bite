import React from 'react';
import ReactDOM from 'react-dom/client'
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import ContactUS from './components/ContactUS';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Restaurant from './components/Restaurant';


const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
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
                element: <About name={"Shubham Chavan"} location={"Mumbai"} Role={"SDE 1"} />

            },
            {
                path: "/contactus",
                element: <ContactUS />
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />)