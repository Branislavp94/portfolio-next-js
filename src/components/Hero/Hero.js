import React from "react";
import { useRouter } from "next/router";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const handleClick = () => {
  window.location.href =
    "https://drive.google.com/file/d/1v5V-tTCBcw2cqOHhwSd4phAkfetucVbX/view?usp=sharing";
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a Junior web developer who is proficient in both back-end and
          front-end frameworks. My passion lies in learning about the latest
          technologies.{" "}
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
