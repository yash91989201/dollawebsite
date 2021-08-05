import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
};

export default App;
