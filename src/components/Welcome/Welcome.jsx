import Header from "../Header/Header";
import Hero from "../Hero/Hero";

import { Wrapper } from "./Welcome.styled";

const Welcome = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
    </Wrapper>
  );
};

export default Welcome;
