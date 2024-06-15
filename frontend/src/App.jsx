import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JoinUs from "./pages/JoinUs";

function App() {

  return (
    <>
      <div className="w-screen h-screen ">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<JoinUs />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
