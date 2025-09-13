import Joi from "joi";
import React, { useState, useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";
import usePost from "../../Hooks/usePost";
import { MessageContext } from "../../Context/Messagecontext";

export default function Register() {
  let [User, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
  });
  let login = useRef(false);
  const [firstName, setfirstName] = useState([]);
  const [lastName, setlastName] = useState([]);
  const [email, setemail] = useState([]);
  const [password, setpassword] = useState([]);
  const [age, setage] = useState([]);
  const { UserData } = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const { item, loading, error, callApi } = usePost(
    "https://backendserver-y5ju.onrender.com/api/auth/signup",
    null,
    false,
    false
  );
  console.log(item.message);

  function getUserData(e) {
    let newUser = { ...User };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  function submit(e) {
    e.preventDefault();
    let validation = validationform();
    if (validation.error) {
      setage([]);
      setlastName([]);
      setfirstName([]);
      setemail([]);
      setpassword([]);
      setErrors(validation.error.details);
      login.current = false;
    } else {
      setage([]);
      setlastName([]);
      setfirstName([]);
      setemail([]);
      setpassword([]);
      callApi(User);
    }
  }
  function validationform() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(15).required(),
      last_name: Joi.string().min(3).max(15).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .min(3)
        .max(15)
        .required()
        .pattern(/^[a-zA-Z0-9]+$/)
        .message("Password must contain only letters and numbers"),
      age: Joi.number().integer().min(16).max(80).required(),
    });
    return schema.validate(User, { abortEarly: false });
  }

  function setErrors(errors) {
    errors.map((err) => {
      if (err.context.label === "first_name") {
        setfirstName(err);
      } else if (err.context.label === "last_name") {
        setlastName(err);
      } else if (err.context.label === "email") {
        setemail(err);
      } else if (err.context.label === "password") {
        setpassword(err);
      } else {
        setage(err);
      }
    });
  }
  item?.message ? showMessage(item.message) : "";
  if (item.message === "User registered successfully") {
    login.current = true;
  }
  if (login.current === true) {
    return <Navigate to="/login" replace />;
  }
  if (UserData) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex justify-center items-center min-h-dvh p-6 w-full">
      <div className="bg-background w-[600px] p-7 rounded-xl mt-[4rem]">
        <div className="hearder block text-center text-white">
          <h1 className="text-2xl font-bold">
            <span className="text-active">Register</span> Form
          </h1>

          {error ? (
            <div className="bg-red-500 text-white p-2 mt-4 rounded-md">
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}

          <form className=" w-full text-start py-4" onSubmit={submit}>
            <label htmlFor="frist_name" className="">
              Frist Name:
            </label>
            <input
              onChange={getUserData}
              type="text"
              id="frist_name"
              name="first_name"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl"
            />
            {firstName.message ? (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {firstName.message}
              </div>
            ) : (
              ""
            )}

            <label htmlFor="last_name" className="pt-2">
              Last Name:
            </label>
            <input
              onChange={getUserData}
              type="text"
              id="last_name"
              name="last_name"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl "
            />
            {lastName.message ? (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {lastName.message}
              </div>
            ) : (
              ""
            )}

            <label htmlFor="age" className="pt-2">
              Age:
            </label>
            <input
              onChange={getUserData}
              type="number"
              id="age"
              name="age"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl "
            />
            {age.message ? (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {age.message}
              </div>
            ) : (
              ""
            )}

            <label htmlFor="email" className="pt-2">
              Email:
            </label>
            <input
              onChange={getUserData}
              type="email"
              id="email"
              name="email"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl "
            />
            {email.message ? (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {email.message}
              </div>
            ) : (
              ""
            )}

            <label htmlFor="Password" className="pt-2">
              Password:
            </label>
            <input
              onChange={getUserData}
              type="password"
              id="Password"
              name="password"
              className="w-full px-2 border border-border bg-input mb-3 mt-2 h-[40px] rounded-xl "
            />
            {password.message ? (
              <div className="bg-red-500 text-white p-2 mb-3 rounded-md">
                {password.message}
              </div>
            ) : (
              ""
            )}

            <button
              className="bg-button w-full h-[40px] rounded-xl  mt-3"
              type="post"
            >
              {loading ? (
                <i className="fa-solid fa-spinner fa-spin "></i>
              ) : (
                "Register"
              )}
            </button>
          </form>
          <p className="">
            Already have account ?{" "}
            <Link to={"/login"} className="text-active">
              Login in{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
