import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Form = ({ formType }) => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [nicknameError, setNickNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [logInData, setLogInData] = useState({
    nickname: "",
    email: "",
    password: "",
  }); // Store log in data in state

  useEffect(() => {
    console.log(logInData.email);
    console.log(logInData.password);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogInData({
      ...logInData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailPattern.test(logInData.email);
    const isNicknameValid = logInData.nickname.length >= 3;
    const isPasswordValid = logInData.password.length >= 4;

    setEmailError(!isEmailValid);
    setNickNameError(!isNicknameValid);
    setPasswordError(!isPasswordValid);

    if (!isEmailValid || !isNicknameValid || !isPasswordValid) {
      return;
    }

    // Handle form submission
    switch (formType) {
      case "log-in":
        break;
      case "sign-up":
        break;
      case "forgot-password":
        break;
    }
    // navigate("/");
  };

  return (
    <>
      <form
        method="post"
        className={`flex flex-col relative px-4 py-6 w-10/12 lg:w-3/12 h-3/4 rounded-md dark:bg-white bg-black`}
      >
        <h1 className="text-3xl ">Blog Logo or Image</h1>
        <h2 className="text-3xl w-full text-center my-4 tracking-wide font-roboto font-bold  ">
          {formType === "log-in"
            ? "Log in"
            : formType == "sign-up"
            ? "Sign up"
            : "Forgot Password"}
        </h2>

        {formType != "forgot-password" && (
          <div className="flex flex-col gap-1">
            <label className="font-roboto font-light tracking-wider ">
              Nickname
            </label>
            <input
              id="nickname"
              value={`${logInData.nickname}`}
              onChange={handleChange}
              type="text"
              placeholder="robert21"
              className={`rounded-md p-2 bg-white text-black border-2  ${
                nicknameError ? "border-red-500" : "border-gray-500"
              }`}
            />
            <p
              className={`${
                nicknameError ? "visible" : " invisible"
              } text-red-500`}
            >
              Nickname must at least 3 characters
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-roboto font-light tracking-wider ">
            Email Address
          </label>
          <input
            id="email"
            value={`${logInData.email}`}
            onChange={handleChange}
            type="email"
            placeholder="Email21@gmail.com"
            className={`rounded-md p-2 bg-white text-black border-2  ${
              emailError ? "border-red-500" : "border-gray-500"
            }`}
          />
          <p
            className={`${emailError ? "visible" : " invisible"} text-red-500`}
          >
            Please enter a valid email
          </p>
        </div>

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
                value={`${logInData.password}`}
                onChange={handleChange}
                type={`${passwordVisibility ? "text" : "password"}`}
                className={`w-full rounded-md p-2 bg-white text-black border-2 ${
                  passwordError ? "border-red-500" : "border-gray-500"
                }`}
              />
              <button
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
              </button>
            </div>

            <p
              className={`${
                passwordError && formType === "signup"
                  ? "visible"
                  : " invisible"
              } text-red-500`}
            >
              Password must at least 4 characters
            </p>
          </div>
        )}

        {formType === "log-in" && (
          <div className="flex flex-row justify-between my-2 dark:text-[#0B0909] text-white  font-lato font-bold text-md">
            <button
              type="button"
              className="hover:scale-110 ease-in duration-100 "
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password ?
            </button>
            <button
              type="button"
              className=" hover:scale-110 ease-in duration-100 "
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        )}

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={`rounded-md p-2 font-roboto font-semibold text-black dark:text-white dark:bg-[#0B0909] bg-white   hover:scale-105 ease-out duration-150 ${
            formType == "log-in" ? "mt-2 " : "mt-8 "
          }`}
        >
          {formType === "log-in"
            ? "Log In"
            : formType === "sign-up"
            ? "Sign Up"
            : "Reset Password"}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Form;
