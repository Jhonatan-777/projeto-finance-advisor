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

// Estilos do Banner
export const BannerWrapper = styled.section`
  ${flexMixin()};
  padding-top: 20px;
  background-color: ${colors.bege};
  background-image: url("https://static.vecteezy.com/system/resources/previews/004/243/021/non_2x/abstract-template-background-white-and-bright-blue-squares-overlapping-with-halftone-and-texture-free-vector.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Estilos do container principal do Banner
export const BannerContent = styled.div`
  ${containerMixin()};
  ${flexMixin("space-between", "center")};
  height: 100vh;
  height: 100dvh;
  gap: 20px;
`;

// Estilos do container de descrição
export const ContainerDesc = styled.div`
  ${flexMixin("space-between", "flex-start")};
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: ${fontSize.xxLarge};
    font-family: ${fontFamily.title};
    font-weight: ${fontWeight.medium};
    width: 500px;
    line-height: 1.2;
  }

  .paragraph {
    font-size: ${fontSize.medium};
    font-family: ${fontFamily.text};
    font-weight: ${fontWeight.regular};
    max-width: 330px;
  }
`;

// Estilos do container de imagem
export const ContainerImage = styled.div`
  ${flexMixin("space-between", "flex-end")};
  align-self: flex-end;
  position: relative;

  .image-principal {
    /* z-index: 1; */
    max-width: 600px;
    max-height: 700px;
    overflow: hidden;
    img {
      object-position: center top;
      object-fit: cover;
    }
  }

  .image-secundaria {
    position: absolute;
    width: 100px;
    border-radius: 10px;
    box-shadow: ${boxShadow.shadowBottomRight};
    background-color: ${colors.light};
    padding: 20px;

    &:nth-child(2) {
      bottom: 100px;
      left: 100px;
    }
    &:nth-child(3) {
      bottom: 200px;
      right: 0;
    }
  }
`;
