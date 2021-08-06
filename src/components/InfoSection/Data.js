import svg1Path from "../../assets/images/svg-1.svg";
import svg2Path from "../../assets/images/svg-2.svg";
import svg3Path from "../../assets/images/svg-3.svg";
// import svg4Path from "../../assets/images/svg-4.svg";

const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without geting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: svg1Path,
  alt: "Car",
  primary: true,
  dark: true,
  dark2: false,
  darkText: false,
};

const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account any time.",
  description:
    "We have you covered no matter where you are located.All yu need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svg2Path,
  alt: "Piggy Bank",
  primary: false,
  dark: false,
  dark2: false,
  darkText: true,
};

const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Creating an account is extremly easy.",
  description:
    "Get everything set up and ready in under 10 minutes.All you need to to is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg3Path,
  alt: "chart",
  primary: false,
  dark: false,
  dark2: false,
  darkText: true,
};

export { homeObjOne, homeObjTwo, homeObjThree };
