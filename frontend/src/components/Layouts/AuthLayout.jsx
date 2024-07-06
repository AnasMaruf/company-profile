import { Link } from "react-router-dom";

export const AuthLayout = ({ type, children }) => {
  return (
    <div className="">
      <h1 className="text-3xl">Blog Logo or Image</h1>
      <h2 className="text-3xl w-full text-center my-4 tracking-wide font-roboto font-bold">
        {type === "log-in"
          ? "Login"
          : type == "sign-up"
          ? "Register"
          : "Forgot Password"}
      </h2>
      {children}
      <p className="text-sm text-center mt-1">
        {type === "log-in"
          ? "Don't have an account? please "
          : "Already have an account? please "}

        {type === "log-in" && (
          <Link
            to={"/sign-up"}
            className="text-blue-600"
          >
            Register
          </Link>
        )}

        {type === "sign-up" && (
          <Link
            to={"/log-in"}
            className="text-blue-600"
          >
            Login
          </Link>
        )}
      </p>
    </div>
  );
};
