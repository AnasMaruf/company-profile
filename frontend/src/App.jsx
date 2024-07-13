import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Search from "./pages/Search";
import { ThemeProvider } from "./components/ThemeContext";
import ForgotPass from "./pages/ForgotPass";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import MyPosts from "./pages/MyPosts";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="w-full h-full ">
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path={`/latest`}
                element={<Home />}
              />
              <Route
                path={`/post/:postId`}
                element={<Post />}
              />
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route
                path="/profile"
                element={<Profile />}
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
              <Route
                path="/new-post"
                element={<NewPost />}
              />
              <Route
                path="/my-posts"
                element={<MyPosts />}
              />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
