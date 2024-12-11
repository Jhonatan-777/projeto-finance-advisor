import styled from "styled-components";
import { colors, fontFamily, fontSize, fontWeight } from "../utils/helpers";

export const Button = styled.button`
  padding: 10px 20px;
  color: ${colors.light};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.text};
  transition: all 0.2s;
  border: none;
  border-radius: 5px;
  background-color: ${colors.dark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }
`;
