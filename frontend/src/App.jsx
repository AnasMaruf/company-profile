import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { ThemeProvider } from "./components/ThemeContext";
import ForgotPass from "./pages/ForgotPass";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ThemeProvider>
        <div className="w-full h-full ">
          <Router>
            <Routes>
              <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
              <Route
                path={`/latest`}
                element={<Home isLoggedIn={isLoggedIn} />}
              />
              <Route path={`/post/:postId`} element={<Post />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
