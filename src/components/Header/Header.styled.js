import styled from "styled-components";
import { theme } from "../../theme";

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${theme.padding.main};
  background-color: ${theme.colors.white};

  @media screen and (min-width: 768px) {
    background-color: transparent;
    flex-wrap: nowrap;
  }
`;

export const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  background-color: ${theme.background.pink};
  top: 75px;
  right: 25px;
  z-index: 10;
  padding: 20px;
  border-radius: 5%;

  @media screen and (min-width: 768px) {
    background-color: transparent;

    position: static;
    flex-direction: row;
    padding: 0px;
    border-radius: 0;
    width: 500px;
  }

  @media screen and (min-width: 1000px) {
    gap: 30px;
    width: 100%;
    flex-wrap: nowrap;
    padding: 0px;
  }
`;

export const Logo = styled.a`
  color: ${theme.colors.textMain};
  font-size: ${theme.fontSizes.m};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.semiBold};
  line-height: 1.2;
  transition: ${theme.transition.cubicBezier};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    color: ${theme.colors.white};
  }

  &:focus,
  &:hover {
    color: ${theme.colors.accent2};
  }
`;

export const Link = styled.a`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textMain};

  line-height: ${theme.lineHeights.body};
  font-weight: ${theme.fontWeights.semiBold};
  padding: 12px 15px;
  border-radius: ${theme.borderRadius.button};

  transition: ${theme.transition.cubicBezier};

  @media screen and (min-width: 768px) {
    color: ${theme.colors.white};
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent2};
  }
`;

export const LinkButton = styled.a`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.body};
  font-weight: ${theme.fontWeights.semiBold};
  padding: 12px 47px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 48px;
  border-radius: ${theme.borderRadius.button};

  background-color: ${theme.colors.accent2};
  border: none;
  cursor: pointer;

  transition: ${theme.transition.cubicBezier};

  @media screen and (min-width: 768px) {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent2};
  }
`;

export const MenuBtn = styled.button`
  width: 30px;
  height: 30px;
  display: block;
  background-color: transparent;
  border: none;

  transition: ${theme.transition.cubicBezier};

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover,
  &:active,
  &:focus {
    scale: 1.5;
  }
`;
