import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./routes/Main";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main view={""} />} />
        <Route path="/home" element={<Main view={""} />} />
        <Route path="/scores" element={<Main view={"scores"} />} />
        <Route path="/profile" element={<Main view={"profile"} />} />
        <Route path="/keyboards" element={<Main view={"keyboards"} />} />
        <Route path="/login" element={<Main view={"login"} />} />
        <Route path="/register" element={<Main view={"register"} />} />
        <Route path="/logout" element={<Main view={"login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
