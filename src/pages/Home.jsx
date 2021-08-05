import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
    </>
  );
};

export default Home;
