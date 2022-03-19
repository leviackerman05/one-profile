import "./App.css";
import "./test.scss";
import { GithubIcon } from "./Icons/github-icon";
import { Routes, Route } from "react-router-dom";
import { Profile, Login } from "./Pages";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="footer-link">
        <h3>Made with ❤️ on</h3>
        <GithubIcon />
      </div>
    </div>
  );
}

export default App;
