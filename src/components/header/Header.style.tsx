import styled from "styled-components";

// mixins
import { containerMixin, flexMixin } from "../../styles/utils/mixins";

// helpers
import {
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
} from "../../styles/utils/helpers";

// Estilos do Header
export const HeaderWrapper = styled.header`
  ${flexMixin()};
  padding: 20px 0;
  background-color: ${colors.light};
`;

// Estilos do container principal do Header
export const HeaderContent = styled.div`
  ${containerMixin()};
  ${flexMixin("space-between", "center")};
  flex-wrap: wrap;
  gap: 20px;

  & .menu-desktop {
    width: 100%;
    ${flexMixin("space-between", "center")};
  }

  & .menu-mobile {
    display: none;

    @media (max-width: 800px) {
      display: block;
      position: relative;
      width: 100%;
      text-align: center;
    }
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.light};
  list-style: none;
  padding: 20px 0;
  box-shadow: ${boxShadow.shadowBottom};
  animation: slideDown 0.3s ease-out;

  li {
    margin: 15px 0;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};
    font-size: ${fontSize.medium};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

// Estilos do botão hamburger
export const ButtonHamb = styled.button<{ $isOpen: boolean }>`
  position: relative;
  top: 10px;
  ${flexMixin("space-between", "center")};
  flex-direction: column;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${({ $isOpen }) =>
      $isOpen ? colors.primary : colors.dark};
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(8px, 5px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(8px, -5px)" : "rotate(0)"};
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Estilos do logo
export const Logo = styled.div`
  p {
    color: ${colors.dark};
    font-size: ${fontSize.xLarge};
    font-weight: ${fontWeight.bold};
    font-family: ${fontFamily.poppins};

    span {
      color: ${colors.primary};
    }
  }
`;

// Estilos do nav (menu de navegação)
export const Navigation = styled.nav`
  ${flexMixin()};
  gap: 30px;

  ul {
    ${flexMixin()};
    gap: 30px;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 800px) {
    ul {
      display: none;
    }
  }
`;

// Estilos do nav link
export const NavLink = styled.li`
  a {
    padding: 5px;
    text-decoration: none;
    color: ${colors.secondary};
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.regular};
    font-family: ${fontFamily.roboto};
    transition: all 0.2s;

    &:hover {
      color: ${colors.dark};
    }
  }
`;
