import styled from "styled-components";

export const Container = styled.div`
  padding: 14px 0;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1170px) {
    max-width: 1170px;
  }
`;

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Button = styled.button`
  width: 170px;
  height: 48px;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.$buttonColor || "#C86DD7"};
  color: #fff;
`;

// export const Card = styled.div`
//   display: block;
//   width: 346px;
//   height: 254px;
//   box-shadow: ${(props) => props.$permanentShadow || "none"};

//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover,
//   &:focus {
//     box-shadow: ${(props) => props.$shadowHover || "none"};
//   }

//   @media screen and (min-width: 768px) {
//     width: 370px;
//     height: 224px;
//   }
// `;

export const Box = styled.div`
  background-color: linear-gradient(225deg, #3023ae 0%, #c86dd7 100%);
`;
