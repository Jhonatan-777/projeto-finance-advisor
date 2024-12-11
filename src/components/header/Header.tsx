import { useState } from "react";

// estilo button
import { Button } from "../../styles/components/Button.styles.tsx";

// estilo gerais header
import {
  ButtonHamb,
  HeaderContent,
  HeaderWrapper,
  Logo,
  MenuList,
  Navigation,
  NavLink,
  Overlay,
} from "./Header.style.tsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <div className="menu-desktop">
          <Logo>
            <p>
              Finance<span>Guide</span>
            </p>
          </Logo>
          <Navigation>
            <ul>
              <NavLink>
                <a href="#">Home</a>
              </NavLink>
              <NavLink>
                <a href="#">About</a>
              </NavLink>
              <NavLink>
                <a href="#">Services</a>
              </NavLink>
              <NavLink>
                <a href="#">Contact Us</a>
              </NavLink>
            </ul>
            <Button>Book Appointment</Button>
          </Navigation>
        </div>
        <div className="menu-mobile">
          {isOpen && (
            <MenuList>
              <NavLink>
                <a href="#">Home</a>
              </NavLink>
              <NavLink>
                <a href="#">About</a>
              </NavLink>
              <NavLink>
                <a href="#">Services</a>
              </NavLink>
              <NavLink>
                <a href="#">Contact Us</a>
              </NavLink>
            </MenuList>
          )}
          {isOpen && <Overlay onClick={toggleMenu} />}
          <ButtonHamb onClick={toggleMenu} $isOpen={isOpen}>
            <span />
            <span />
            <span />
          </ButtonHamb>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
