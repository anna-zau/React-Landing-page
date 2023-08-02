import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/values";

import { Section, Container } from "../../globalStyles.styled";
import css from "./OurValue.module.scss";

import picture from "../../assets/images/blue-metal-cubical-structures.jpg";

const OurValue = () => {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.imageBox}>
            <img src={picture} alt="Building" className={css.imageMain} />
          </div>

          <div>
            <h2 className={css.title}>Our Value</h2>
            <h3 className={css.titleSecond}>Value We Give to You</h3>
            <p className={css.description}>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
            <Accordion>
              {data.map(({ icon, heading, detail }) => {
                return (
                  <AccordionItem key={heading} className="accordion">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {icon}
                        <p>{heading}</p>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
            {/* <ul>
              <li>
                <img src="" alt="" />
                <h4>Best interest rates on the market</h4>
                <p>lorem50</p>
              </li>
              <li></li>

              <li></li>
            </ul> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurValue;
