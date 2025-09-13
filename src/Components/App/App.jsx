import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Tv from "../Tv/Tv";
import Movies from "../Movies/Movies";
import Layout from "../Layout/Layout";
import People from "../People/People";
import ItemDetails from "../ItemDetails/ItemDetails";
import Notfound from "../Notfound/Notfound";
import TrandingcontextProvider from "../../Context/Mediacontext";
import Trailer from "../Trailer/Trailer";
import Offlinec from "../Offline/Offline";
import MovieSearchProvider from "../../Context/MovieSearch";
import SearchProvider from "../../Context/Tvsearch";
import { UserContext } from "../../Context/Usercontext";
import MessageProvider from "../../Context/Messagecontext";
import Profile from "../Profile/Profile";
export default function App() {


  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "tv", element: <Tv /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "movies", element: <Movies /> },
        { path: "profile", element: <Profile /> },
        { path: "itemdetails/:id/:media_type", element: <ItemDetails /> },
        { path: "people/:id", element: <People /> },
        { path: "trailer/:type/:id", element: <Trailer /> },
        { path: "offline", element: <Offlinec /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <MessageProvider>
        <SearchProvider>
          <MovieSearchProvider>
            <TrandingcontextProvider>
              <RouterProvider router={routers} />
            </TrandingcontextProvider>
          </MovieSearchProvider>
        </SearchProvider>
      </MessageProvider>
    </>
  );
}
