import styled from "styled-components";

// mixins
import { containerMixin, flexMixin } from "../../styles/utils/mixins";

// helpers
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
} from "../../styles/utils/helpers";

// Estilos da secao formulario
export const FormWrapper = styled.section`
  ${flexMixin()};
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${colors.dark};
`;

// Estilos do container formulario
export const FormContent = styled.div`
  ${containerMixin()};
  ${flexMixin("space-between", "center")};
  gap: 20px;

  .container-desc-form {
    max-width: 500px;
    ${flexMixin("space-between", "flex-start")};
    flex-direction: column;

    .title {
      color: ${colors.light};
      font-size: ${fontSize.xLarge};
      font-family: ${fontFamily.title};
      font-weight: ${fontWeight.medium};
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .paragraph {
      max-width: 350px;
      color: ${colors.light};
      font-size: ${fontSize.medium};
      font-family: ${fontFamily.text};
      font-weight: ${fontWeight.regular};
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .detail {
      ${flexMixin("space-between", "center")};
      gap: 20px;

      span {
        width: 80px;
        height: 2px;
        background-color: ${colors.bege};
      }
      p {
        color: ${colors.light};
        font-size: ${fontSize.xLarge};
        font-family: ${fontFamily.title};
        font-weight: ${fontWeight.medium};
        text-transform: uppercase;
      }
    }

    .number {
      color: ${colors.light};
      font-size: ${fontSize.large};
      font-family: ${fontFamily.title};
      font-weight: ${fontWeight.medium};
    }
  }
`;

// Estilos do formulario
export const FormContain = styled.form`
  width: 100%;
  max-width: 420px;
  ${flexMixin("flex-start", "flex-start")};
  flex-direction: column;
  gap: 15px;
  padding: 30px 25px;
  background-color: ${colors.light};
  border-radius: 10px;

  .container-input {
    width: 100%;
    ${flexMixin("flex-start", "flex-start")};
    flex-direction: column;
    gap: 5px;

    label {
      color: ${colors.dark};
      font-size: ${fontSize.small};
      font-family: ${fontFamily.text};
      font-weight: ${fontWeight.medium};
    }

    .input {
      width: 100%;
      color: ${colors.dark};
      font-size: ${fontSize.small};
      font-family: ${fontFamily.text};
      font-weight: ${fontWeight.medium};
      padding: 15px 20px;
      background-color: ${colors.bege};
      border: transparent;
      border-radius: 10px;
    }
  }
`;
