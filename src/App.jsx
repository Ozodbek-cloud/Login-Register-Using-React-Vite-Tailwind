import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import SignUp from "./component/sign_up/Sign_Up";
import SignIn from "./component/sign_in/Sign_In";
import Verify from "./component/verofy/Verify";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUp />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/sign_in" element={<SignIn />} /> 
          <Route path="/verify" element={<Verify />} /> 
        </Routes>
      </Router>
  );
}

export default App;