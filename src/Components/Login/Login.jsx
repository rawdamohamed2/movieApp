import { useState, useContext } from "react";
import Joi from "joi";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";

import usePost from "../../Hooks/usePost";

export default function Login() {
  const { UserData } = useContext(UserContext);
  const [User, setUser] = useState({ email: "", password: "" });
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const {
    loading,
    error: err,
    callApi,
  } = usePost(
    "https://backendserver-y5ju.onrender.com/api/auth/signin",
    null,
    false,
    false
  );

  function getUserData(e) {
    setUser({ ...User, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    let vaildation = vaildationLogin();
    if (vaildation.error) {
      setEmail({});
      setPassword({});
      setalertLogin(vaildation.error.details);
    } else {
      setEmail({});
      setPassword({});
      callApi(User);
    }
  }

  function vaildationLogin() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .min(3)
        .max(15)
        .required()
        .pattern(/^[a-zA-Z0-9]+$/)
        .message("Password must contain only letters and numbers"),
    });
    return schema.validate(User, { abortEarly: false });
  }

  function setalertLogin(array) {
    array.forEach((err) => {
      if (err.context.label === "email") setEmail(err);
      else setPassword(err);
    });
  }

  if (UserData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex justify-center items-center min-h-[92dvh] p-6 w-full">
      <div className="bg-background w-[600px] p-7 rounded-xl">
        <div className="hearder block text-center text-white">
          <h1 className="text-2xl font-bold">
            <span className="text-active">Login</span> Form
          </h1>
          {err && (
            <div className="bg-red-500 text-white p-2 mt-4 rounded-md">
              <p>{err}</p>
            </div>
          )}
          <form className="w-full text-start py-4" onSubmit={submit}>
            <label htmlFor="email" className="pt-2">
              Email:
            </label>
            <input
              onChange={getUserData}
              type="email"
              id="email"
              name="email"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl"
            />
            {email.message && (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {email.message}
              </div>
            )}

            <label htmlFor="Password" className="pt-2">
              Password:
            </label>
            <input
              onChange={getUserData}
              type="password"
              id="Password"
              name="password"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl"
            />
            {password.message && (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {password.message}
              </div>
            )}

            <button
              className="bg-button w-full h-[40px] rounded-xl mt-3"
              type="submit"
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "login"
              )}
            </button>
          </form>
          <p className="">
            you don't have account ?{" "}
            <Link to={"/register"} className="text-active">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
