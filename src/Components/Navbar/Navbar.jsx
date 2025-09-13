import React, { useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { UserContext } from "../../Context/Usercontext";

export default function Nav() {
  let navRef = useRef();
  let navigate = useNavigate();
  const { UserData, setUserData } = useContext(UserContext);
  const Logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/");
  };
  const toggleNav = () => {
    navRef.current.classList.toggle("show");
  };

  return (
    <>
      <header className="text-white w-full z-50 shadow-sm md:py-3 py-1 px-2  absolute top-0 left-0 md:bg-transparent md:backdrop-blur-none bg-background/30 backdrop-blur-xl ">
        <div className="flex justify-between items-center lg:px-4 px-2 py-2 container mx-auto lg:gap-0 gap-3">
          {/* Logo  Mobile menu button*/}

          <div className="flex items-center justify-between md:gap-0 gap-4 md:w-auto w-full">
            <Link to="/" className="text-2xl font-bold">
              CineHub
            </Link>
            <button
              className="md:hidden text-2xl bg-secondbg/50 p-2 rounded-md"
              onClick={toggleNav}
            >
              <i className="fa-solid fa-bars text-border"></i>
            </button>
          </div>

          <nav className="flex items-center md:flex hidden justify-center gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                  : "hover:text-hover transition-all duration-100 ease-in-out"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                  : "hover:text-hover transition-all duration-100 ease-in-out"
              }
            >
              Tv
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                  : "hover:text-hover transition-all duration-100 ease-in-out"
              }
            >
              Movies
            </NavLink>
          </nav>

          <div className=" flex md:flex hidden items-center justify-end gap-4">
            <Search />
            {UserData ? (
              <>
                <NavLink
                  to="/Profile"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                      : "hover:text-hover transition-all duration-100 ease-in-out"
                  }
                >
                  Profile
                </NavLink>
                <p
                  onClick={Logout}
                  className="hover:text-active transition-all duration-100 ease-in-out cursor-pointer"
                >
                  {" "}
                  <span>Logout</span>{" "}
                </p>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                      : "hover:text-hover transition-all duration-100 ease-in-out"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                      : "hover:text-hover transition-all duration-100 ease-in-out"
                  }
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* mobile nav */}
          <nav
            ref={navRef}
            className="mobileMenu hiddenclass bg-background/30 backdrop-blur-xl  flex items-center py-4 gap-4 flex-col justify-between  absolute top-[72px] left-0 z-50 w-full transition-all duration-100 ease-in-out"
          >
            <nav className="flex items-center justify-center gap-4 flex-col">
              <NavLink
                onClick={toggleNav}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                    : "hover:text-hover transition-all duration-100 ease-in-out"
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={toggleNav}
                to="/tv"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                    : "hover:text-hover transition-all duration-100 ease-in-out"
                }
              >
                Tv
              </NavLink>
              <NavLink
                onClick={toggleNav}
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                    : "hover:text-hover transition-all duration-100 ease-in-out"
                }
              >
                Movies
              </NavLink>
              {UserData ? (
                <>
                  <NavLink
                    onClick={toggleNav}
                    to="/Profile"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                        : "hover:text-hover transition-all duration-100 ease-in-out"
                    }
                  >
                    Profile
                  </NavLink>
                  <p
                    onClick={Logout}
                    className="hover:text-active transition-all duration-100 ease-in-out cursor-pointer"
                  >
                    {" "}
                    <span>Logout</span>{" "}
                  </p>
                </>
              ) : (
                <>
                  <NavLink
                    onClick={toggleNav}
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                        : "hover:text-hover transition-all duration-100 ease-in-out"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    onClick={toggleNav}
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-active text-active transition-all duration-100 ease-in-out"
                        : "hover:text-hover transition-all duration-100 ease-in-out"
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </nav>

            {/* Right Section desktop */}

            {/* {UserData? */}
            <div className=" flex  items-center justify-end gap-4 w-80">
              <Search />
            </div>
            {/* :''
            } */}
          </nav>
        </div>
      </header>
    </>
  );
}
