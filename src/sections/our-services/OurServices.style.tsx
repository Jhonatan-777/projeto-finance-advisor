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

// Estilos do services
export const ServicesWrapper = styled.section`
  ${flexMixin()};
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${colors.light};
`;

// Estilos do container services
export const ServicesContent = styled.div`
  ${containerMixin()};
  ${flexMixin("space-between", "center")};
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: ${fontSize.xLarge};
    font-family: ${fontFamily.title};
    font-weight: ${fontWeight.medium};
    line-height: 1.2;
  }

  .desc-section {
    text-align: center;
    max-width: 50ch;
    font-size: ${fontSize.medium};
    font-family: ${fontFamily.text};
    font-weight: ${fontWeight.regular};
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

// Estilos do container card
export const ContainerCard = styled.div`
  width: 100%;
  ${flexMixin("center", "flex-start")};
  flex-wrap: wrap;
  gap: 30px;

  .card {
    flex: 1 1 clamp(300px, 100%, 370px);
    max-width: 370px;

    border-radius: 10px;
    background-color: ${colors.bege};
    padding: 20px;
    ${flexMixin("center", "center")};
    flex-direction: column;
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
      text-align: center;

      h3 {
        font-size: ${fontSize.medium};
        font-family: ${fontFamily.title};
        font-weight: ${fontWeight.medium};
        line-height: 1.2;
        margin-bottom: 10px;
      }
    }
  }
`;
