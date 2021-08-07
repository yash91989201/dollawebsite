import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { SignIn as SignInComponent } from "../components/SignIn/index";
const SignIn = () => {
  return (
    <>
      <ScrollToTop />
      <SignInComponent />
    </>
  );
};

export default SignIn;
