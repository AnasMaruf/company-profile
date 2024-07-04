import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Button from "../Elements/button";

const Form = ({ formType }) => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const initialStateLogin = {
    username: "",
    password: "",
  };
  const initialStateRegister = {
    username: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [dataRegister, setDataRegister] = useState(initialStateRegister);
  const [dataLogin, setDataLogin] = useState(initialStateLogin);
  const { username, email, password, confPassword } = dataRegister;
  const { username: usernameLogin, password: passwordLogin } = dataLogin;
  const [msg, setMsg] = useState([]);
  const handleChangeRegister = (e) => {
    e.preventDefault();
  };
  const handleChangeLogin = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (ke tambaken dei kondisi misal bila log-in bisa pakai email atau username)
    switch (formType) {
      case "log-in":
        console.log("Hello World !");

        break;
      case "sign-up":
        console.log("Hello World!");
        break;
      case "forgot-password":
        console.log("Hello World !");
        break;
    }
    console.log(localStorage.getItem("token"));
    // navigate("/");
  };

  return (
    <>
      <form
        method="post"
        className={`flex flex-col relative px-4 py-6 w-10/12 lg:w-3/12 h-3/4 rounded-md dark:bg-[#161616] bg-white`}
      >
        <h1 className="text-3xl ">Blog Logo or Image</h1>
        <h2 className="text-3xl w-full text-center my-4 tracking-wide font-roboto font-bold  ">
          {formType === "log-in"
            ? "Log in"
            : formType == "sign-up"
            ? "Sign up"
            : "Forgot Password"}
        </h2>

        {formType != "forgot-password" && formType != "log-in" && (
          <div className="flex flex-col gap-1">
            <label className="font-roboto font-light tracking-wider ">
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={handleChangeRegister}
              type="text"
              placeholder="robert21"
              className={`rounded-md p-2 bg-white text-black border-2 `}
            />
            {/* <p
              className={`${
                errorHandler.username ? "visible" : " invisible"
              } dark:text-[#FFFF00] text-red-500`}
            >
              username must at least 3 characters
            </p> */}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-roboto font-light tracking-wider ">
            Your email address {formType == "log-in" && "or username"}
          </label>
          <input
            id="email"
            value={email}
            onChange={handleChangeLogin}
            type="email"
            placeholder=""
            className={`rounded-md p-2 bg-white text-black border-2 `}
          />
          {/* <p
            className={`${
              errorHandler.email ? "visible" : " invisible"
            } dark:text-[#FFFF00] text-red-500`}
          >
            {formType != "log-in" && "Email is not valid"}
          </p> */}
        </div>

        {/* Password input, does not exist on forgot-password form */}
        {formType != "forgot-password" && (
          <div className="flex flex-col gap-1">
            <label className="font-roboto font-light tracking-wider ">
              Password{" "}
              {formType == "signup" && (
                <span className="font-extralight text-xs ml-2">
                  (at least 4 characters)
                </span>
              )}
            </label>
            <div className="relative w-full">
              <input
                id="password"
                value={password}
                onChange={handleChangeRegister}
                type={`${passwordVisibility ? "text" : "password"}`}
                className={`w-full rounded-md p-2 bg-white text-black border-2`}
              />
              <Button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibility(!passwordVisibility);
                }}
              >
                <img
                  src={`${
                    passwordVisibility
                      ? "https://img.icons8.com/ios-glyphs/30/000000/visible.png"
                      : "https://img.icons8.com/ios-glyphs/30/000000/invisible.png"
                  }`}
                  className="w-4 h-4"
                />
              </Button>
            </div>

            {/* <p
              className={`${
                errorHandler.password && formType === "sign-up"
                  ? "visible"
                  : " invisible"
              } dark:text-[#FFFF00] text-red-500`}
            >
              Password must at least 4 characters
            </p> */}
          </div>
        )}

        {/* Confirm Password for sign-up */}
        {formType === "sign-up" && (
          <div className="flex flex-col gap-1">
            <label className="font-roboto font-light tracking-wider ">
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                id="confirm-password"
                value={confPassword}
                onChange={handleChangeRegister}
                type={`${passwordVisibility ? "text" : "password"}`}
                className={`w-full rounded-md p-2 bg-white text-black border-2`}
              />
              <Button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibility(!passwordVisibility);
                }}
              >
                <img
                  src={`${
                    passwordVisibility
                      ? "https://img.icons8.com/ios-glyphs/30/000000/visible.png"
                      : "https://img.icons8.com/ios-glyphs/30/000000/invisible.png"
                  }`}
                  className="w-4 h-4"
                />
              </Button>
            </div>
            {/* <p
              className={`${
                errorHandler.confirmPasswordError && formType === "sign-up"
                  ? "visible"
                  : " invisible"
              } dark:text-[#FFFF00] text-red-500`}
            >
              Password does not match !
            </p> */}
          </div>
        )}

        {/* Forgot password or Sign Up button, only exist in log-in form */}
        {formType === "log-in" && (
          <div className="flex flex-row justify-between my-2  font-lato font-bold text-md">
            <Button
              type="button"
              className="hover:scale-110 ease-in duration-100 "
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password ?
            </Button>
            <Button
              type="button"
              className=" hover:scale-110 ease-in duration-100 "
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </div>
        )}

        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={`rounded-md p-2 font-roboto font-semibold text-white dark:bg-black bg-blue-600 hover:scale-105 ease-out duration-150 ${
            formType == "log-in" ? "mt-2 " : "mt-8 "
          }`}
        >
          {formType === "log-in"
            ? "Log In"
            : formType === "sign-up"
            ? "Sign Up"
            : "Reset Password"}
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default Form;
