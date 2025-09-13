import React from "react";
import error from "../../assets/error.png";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="grid justify-center items-center min-h-[93dvh] my-6 align-center">
        <div className=" p-5">
          <h3 className="text-center text-xl font-bold ">404</h3>
          <h1 className="text-center text-4xl font-bold py-3">
            Page not found
          </h1>
          <h2 className="text-center text-xl font-bold text-secfont">
            Sorry, we couldn’t find the page you’re looking for.
          </h2>
          <img src={error} alt="" className="w-[350px] h-[350px] mx-auto" />
          <Link
            to={"/"}
            className="btn w-40 text-center mx-auto block bg-button py-2 rounded-lg text-lg"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}
