//estilo button
import { Button } from "../../styles/components/Button.styles";

// estilo gerais banner
import {
  BannerContent,
  BannerWrapper,
  ContainerDesc,
  ContainerImage,
} from "./Banner.style";

// images
import ImgEmpresario from "../../assets/images/image-empresario.png";
import ImgGrafico from "../../assets/images/image-grafico.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <ContainerDesc>
          <h1 className="title">A Power that Shines Your Business</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consect adipis elit. Minus labore placeat
            quae nulla?
          </p>
          <Button>Discover Demo</Button>
        </ContainerDesc>
        <ContainerImage>
          <div className="image-principal">
            <img src={ImgEmpresario} alt="Imagem do Grafico" />
          </div>
          <div className="image-secundaria">
            <img src={ImgGrafico} alt="Imagem do Profissional" />
          </div>
          <div className="image-secundaria">
            <img src={ImgGrafico} alt="Imagem do Grafico" />
          </div>
        </ContainerImage>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
