import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";
export default function Footer() {
  let { UserData } = useContext(UserContext);
  return (
    <footer className="py-5 bg-background">
      <div className="container mx-auto text-center">
        <p className="mb-3">© 2025 CineHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-3">
          <Link
            to={"/"}
            className="hover:text-active transition-all duration-100 ease-in-out"
          >
            Home
          </Link>
          <Link
            to={"/tv"}
            className="hover:text-active transition-all duration-100 ease-in-out"
          >
            Tv
          </Link>
          <Link
            to={"/movies"}
            className="hover:text-active transition-all duration-100 ease-in-out"
          >
            Movies
          </Link>
          {UserData ? (
            <Link
              to={"/profile"}
              className="hover:text-active transition-all duration-100 ease-in-out"
            >
              Profile
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="hover:text-active transition-all duration-100 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-xl hover:text-active transition-all duration-100 ease-in-out"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-xl hover:text-active transition-all duration-100 ease-in-out"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            className="text-xl hover:text-active transition-all duration-100 ease-in-out"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://spotify.com"
            className="text-xl hover:text-active transition-all duration-100 ease-in-out"
          >
            <i className="fa-brands fa-spotify"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
