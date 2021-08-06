import React, { useState } from "react";
import video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  AngleRight,
  ArrowRight,
} from "./styledcomponents";

import { Button } from "../Shared/ButtonElement";

const HeroSection = ({ mainHero }) => {
  const [btnHover, setBtnHover] = useState(false);
  const onHover = () => setBtnHover(!btnHover);
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy.</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive $50 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started{btnHover ? <AngleRight /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
