import { useState } from "react";

import {
  Navigation,
  List,
  Logo,
  Link,
  LinkButton,
  Button,
  MenuBtn,
} from "./Header.styled";
import { AiOutlineMenu } from "react-icons/ai";

import { Container } from "../../globalStyles.styled";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <Container>
      <Navigation>
        <Logo href="#main">Homeline</Logo>
        <List opened={menuOpened}>
          <li>
            <Link href="#residencies">Residencies</Link>
          </li>
          <li>
            <Link href="#our-clients">Our Clients</Link>
          </li>
          <li>
            <Link href="#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="#get-started">Get Started</Link>
          </li>
          <li>
            <Button type="button">
              <LinkButton href="mailto:annyaren@gmail.com">Contact</LinkButton>
            </Button>
          </li>
        </List>

        <MenuBtn type="button" onClick={() => setMenuOpened((prev) => !prev)}>
          <AiOutlineMenu style={{ color: "#C86DD7" }} size={30} />
        </MenuBtn>
      </Navigation>
    </Container>
  );
};

export default Header;
