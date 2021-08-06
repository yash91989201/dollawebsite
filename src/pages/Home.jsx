import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection/index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <HeroSection mainHero={true} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
