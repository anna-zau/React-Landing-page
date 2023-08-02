import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  padding: 0px 14px;

  position: relative;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 5px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1170px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 70px;

  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.l};

  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.heading1};
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const TextBox = styled.div`
  margin-top: 25px;
`;
export const Text = styled.p`
  color: ${theme.colors.white};

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.body};
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;

  @media screen and (min-width: 1000px) {
    width: 650px;
  }
`;

export const NumSpan = styled.span`
  color: ${theme.colors.white};

  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.heading3};

  margin-right: 5px;
`;

export const PlusSpan = styled.span`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.heading2};
  color: ${theme.colors.accent2};
`;

export const Caption = styled.p`
  color: ${theme.colors.white};

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semiBold};
  /* line-height: ${theme.lineHeights.body}; */
`;

export const SocialsList = styled.ul`
  display: flex;
  gap: 15px;
  align-self: center;
  justify-content: center;

  margin-top: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 15px;

    justify-content: flex-end;
  }
`;

export const SocialsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const OvalFirst = styled.div`
  position: absolute;
  top: -70px;
  right: -50px;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: ${theme.background.gradient};
  opacity: 0.5;
`;

export const OvalSecond = styled.div`
  position: absolute;
  top: -30px;
  right: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${theme.background.gradient};
  opacity: 0.5;
`;

export const OvalThird = styled.div`
  position: absolute;
  top: 350px;
  right: 250px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${theme.background.gradient};
  opacity: 0.5;
`;

export const OvalFourth = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 350px;
    right: -200px;
    width: 390px;
    height: 390px;
    border-radius: 50%;
    background: ${theme.background.gradient};
    opacity: 0.5;
  }
`;
