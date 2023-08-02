import { useState } from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { Section } from "../../globalStyles.styled";
import heroImg from "../../assets/icons/city_.svg";
import {
  Container,
  Wrapper,
  Box,
  MainTitle,
  TextBox,
  Text,
  List,
  Item,
  Image,
  NumSpan,
  PlusSpan,
  Caption,
  SocialsList,
  SocialsItem,
  OvalFirst,
  OvalSecond,
  OvalThird,
  OvalFourth,
} from "./Hero.styled";

const Hero = () => {
  const [facebookColor, setFacebookColor] = useState("FFF");
  const [instagramColor, setInstagramColor] = useState("FFF");
  const [twitterColor, setTwitterColor] = useState("FFF");

  const handleFacebookMouseEnter = () => {
    setFacebookColor("#FFC300");
  };

  const handleFacebookMouseLeave = () => {
    setFacebookColor("#FFF");
  };

  const handleInstagramMouseEnter = () => {
    setInstagramColor("#FFC300");
  };

  const handleInstagramMouseLeave = () => {
    setInstagramColor("#FFF");
  };

  const handleTwitterMouseEnter = () => {
    setTwitterColor("#FFC300");
  };

  const handleTwitterMouseLeave = () => {
    setTwitterColor("#FFF");
  };

  return (
    <Section id="main">
      <Container>
        <Wrapper>
          <Box>
            <MainTitle>Discover Most Suitable Property</MainTitle>
            <TextBox>
              <Text>
                Find a variety of properties that suit you very easilty.
              </Text>
              <Text>
                Forget all difficulties in finding a residence for you.
              </Text>
            </TextBox>
            <List>
              <Item>
                <div>
                  <NumSpan>9000</NumSpan>
                  <PlusSpan>+</PlusSpan>
                </div>
                <Caption>Premium Product</Caption>
              </Item>
              <Item>
                <div>
                  <NumSpan>2000</NumSpan>
                  <PlusSpan>+</PlusSpan>
                </div>
                <Caption>Happy Customer</Caption>
              </Item>
              <Item>
                <div>
                  <NumSpan>28</NumSpan>
                  <PlusSpan>+</PlusSpan>
                </div>
                <Caption>Awards Winning</Caption>
              </Item>
            </List>
          </Box>
          <Image src={heroImg} alt="Buildings" />
        </Wrapper>
        <SocialsList>
          <SocialsItem>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleFacebookMouseEnter}
              onMouseLeave={handleFacebookMouseLeave}
            >
              <FaFacebookSquare style={{ color: facebookColor }} size={30} />
            </a>
          </SocialsItem>
          <SocialsItem>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleInstagramMouseEnter}
              onMouseLeave={handleInstagramMouseLeave}
            >
              <FaInstagramSquare style={{ color: instagramColor }} size={30} />
            </a>
          </SocialsItem>
          <SocialsItem>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleTwitterMouseEnter}
              onMouseLeave={handleTwitterMouseLeave}
            >
              <FaTwitterSquare style={{ color: twitterColor }} size={30} />
            </a>
          </SocialsItem>
        </SocialsList>
        <OvalFirst></OvalFirst>
        <OvalSecond></OvalSecond>
        <OvalThird></OvalThird>
        <OvalFourth></OvalFourth>
      </Container>
    </Section>
  );
};

export default Hero;
