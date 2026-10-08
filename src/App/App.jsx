import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Home from "../pages/home/HomePage.jsx";
import Tv from "../pages/tv/TvPage.jsx";
import Movies from "../pages/Movies/MoviesPage.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import People from "../pages/people/PeoplePage.jsx";
import ItemDetails from "../pages/itemDetails/ItemDetailsPage.jsx";
import NoFoundPage from "../pages/notFoundPage/NoFoundPage.jsx";
import Trailer from "../pages/Trailer/Trailer.jsx";
import OffLine from "../pages/Offline/Offline.jsx";
import Profile from "../Components/Profile/Profile.jsx";
import MessageProvider from "../Context/Messagecontext.jsx";

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
        { path: "item-details/:id/:media_type", element: <ItemDetails /> },
        { path: "people/:id", element: <People /> },
        { path: "trailer/:type/:id", element: <Trailer /> },
        { path: "offline", element: <OffLine /> },
        { path: "*", element: <NoFoundPage /> },
      ],
    },
  ]);

  return (
    <>
      <MessageProvider>
        <RouterProvider router={routers} />
      </MessageProvider>
    </>
  );
}
