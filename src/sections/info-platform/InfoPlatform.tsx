// estilo gerais banner
import {
  ContainerCard,
  PlatformContent,
  PlatformWrapper,
} from "./InfoPlatform.style";

// images
import ImgLampada from "../../assets/icons/lampada.png";
import ImgGrafico from "../../assets/icons/grafico-de-barras.png";
import ImgPapel from "../../assets/icons/papel.png";

const InfoPlatform = () => {
  return (
    <PlatformWrapper>
      <PlatformContent>
        <h2 className="title">
          The Professional Consultation <br /> Platform For Your Real Estate and
          Finance
        </h2>
        <ContainerCard>
          <div className="card">
            <div className="card-image">
              <img src={ImgLampada} alt="image lampada icon" />
            </div>
            <div className="card-desc">
              <h3>We innovate</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                praesentium!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgGrafico} alt="image grafico icon" />
            </div>
            <div className="card-desc">
              <h3>Performance</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                praesentium!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPapel} alt="image papel icon" />
            </div>
            <div className="card-desc">
              <h3>A Full Service</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                praesentium!
              </p>
            </div>
          </div>
        </ContainerCard>
      </PlatformContent>
    </PlatformWrapper>
  );
};

export default InfoPlatform;
