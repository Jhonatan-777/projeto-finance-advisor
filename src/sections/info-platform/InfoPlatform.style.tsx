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

// Estilos do platform
export const PlatformWrapper = styled.section`
  ${flexMixin()};
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${colors.light};
`;

// Estilos do container platform
export const PlatformContent = styled.div`
  ${containerMixin()};
  ${flexMixin("space-between", "flex-start")};
  flex-direction: column;
  gap: 60px;

  .title {
    font-size: ${fontSize.xLarge};
    font-family: ${fontFamily.title};
    font-weight: ${fontWeight.medium};
    line-height: 1.2;
  }
`;

// Estilos do container card
export const ContainerCard = styled.div`
  width: 100%;
  ${flexMixin("space-between", "flex-start")};
  flex-wrap: wrap;
  gap: 20px;

  .card {
    width: 100%;
    max-width: 300px;

    border-radius: 10px;
    background-color: ${colors.bege};
    padding: 20px;
    ${flexMixin("space-between", "center")};
    gap: 20px;
    transition: all 0.2s;

    &:hover {
      background-color: ${colors.light};
      box-shadow: ${boxShadow.shadowBottomRight};
      transform: translateX(-2px);
    }

    .card-image {
      width: 100%;
      max-width: 60px;
    }

    .card-desc {
      width: 100%;

      h3 {
        font-size: ${fontSize.medium};
        font-family: ${fontFamily.title};
        font-weight: ${fontWeight.medium};
        line-height: 1.2;
        margin-bottom: 10px;
      }

      p {
        width: 25ch;
        font-size: ${fontSize.small};
        font-family: ${fontFamily.text};
        font-weight: ${fontWeight.regular};
        line-height: 1.6;
      }
    }
  }
`;
