import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { ThemeProvider } from "./components/ThemeContext";
import ForgotPass from "./pages/ForgotPass";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="w-screen h-screen ">
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route
                path="/forgot-password"
                element={<ForgotPass />}
              />
              <Route
                path="/log-in"
                element={<LogIn />}
              />
              <Route
                path="/search"
                element={<Search />}
              />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
