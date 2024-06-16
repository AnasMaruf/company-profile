import React, { useState } from "react";

const JoinUs = () => {
  const [checkEmail, setCheckEmail] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toogleState = (e, state) => {
    e.preventDefault();
    switch (state) {
      case "password":
        setPasswordVisibility(!passwordVisibility);
        break;

      case "checkEmail":
        setCheckEmail(!checkEmail);
        break;
    }
  };
  return (
    <>
      <section className="flex flex-col gap-5 items-center justify-center w-full h-full text-black bg-[#dadada]">
        <h1 className="text-3xl">Title</h1>
        <form
          method="post"
          className="flex flex-col  px-4 py-6 w-10/12 h-3/4 rounded-md bg-white"
        >
          <div className="flex flex-col gap-1">
            <label>Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email21@gmail.com"
              className="rounded-md p-2 bg-white text-black border-2 border-gray-500"
            />
            <p
              className={`${checkEmail ? "invisible" : "visible"} text-red-500`}
            >
              Please enter a valid email
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <div className="relative w-full">
              <input
                id="password"
                type={`${passwordVisibility ? "text" : "password"}`}
                className="w-full rounded-md p-2 bg-white text-black border-2 border-gray-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center"
                onClick={(e) => toogleState(e, "password")}
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
          </div>
          <div className="flex flex-row justify-between mt-8">
            <label>Not a Member ?</label>
            <button
              type="button"
              className="text-blue-400 font-semibold"
              onClick={(e) => toogleState(e, "password")}
            >
              Sign Up
            </button>
          </div>

          <button
            type="submit"
            onClick={(e) => toogleState(e, "checkEmail")}
            className="rounded-md p-2 bg-blue-500 text-white mt-2"
          >
            Log In
          </button>
        </form>
      </section>
    </>
  );
};

export default JoinUs;
