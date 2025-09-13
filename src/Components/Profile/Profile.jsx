import React, { useContext } from "react";
import { Link, useNavigate ,Navigate } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";
export default function Profile() {
  let { UserData, setUserData } = useContext(UserContext);
  let navigate = useNavigate();
  
  if (!UserData) {
    return <Navigate to="/login" replace />;
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/");
  };
  return (
    <section className="min-h-dvh flex justify-center items-center start w-full p-5">
      <div className="profile">
        <h2 className="title">
          <span className="text-active">My</span> Profile
        </h2>
        <h4 className="text-center text-xl">
          {UserData.first_name} {UserData.last_name}
        </h4>
        <p className="text-center text-secfont text-md">{UserData.email}</p>
        <div className="content py-4">
          <h5 className="fw-bold text-md ">Contact Info:</h5>
          <p className="ps-2 text-secfont pt-2">Age: {UserData.age}</p>
          <p className="ps-2 text-secfont">Email: {UserData.email}</p>
        </div>
        <div className="buttons flex justify-between py-3 gap-2">
          <Link to={"/"} className="btn bg-button px-4 py-2 rounded-lg ">
            Home
          </Link>
          <button
            onClick={logout}
            className="btn bg-button px-4 py-2 rounded-lg"
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  );
}
