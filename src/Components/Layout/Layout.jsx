import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Offline, Online } from "react-detect-offline";
export default function Layout() {
  let navigateg = useNavigate();

  useEffect(() => {
    const off = () => navigateg("/offline");
    const on = () => navigateg("/");

    window.addEventListener("offline", off);
    window.addEventListener("online", on);

    return () => {
      window.removeEventListener("offline", off);
      window.removeEventListener("online", on);
    };
  }, [navigateg]);

  return (
    <>
      <Navbar />
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
