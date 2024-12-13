// estilo gerais banner
import {
  ContainerCard,
  ServicesContent,
  ServicesWrapper,
} from "./OurServices.style";

// images
import ImgPc from "../../assets/icons/desenvolvimento-de-jogos.png";

const OurServices = () => {
  return (
    <ServicesWrapper>
      <ServicesContent>
        <h2 className="title">Explore Our Services</h2>
        <p className="desc-section">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero a
          fadio maiores inventore architecto.
        </p>
        <ContainerCard>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Estate Planning</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Strategy and Planning</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Strategy and Planning</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Estate Planning</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Strategy and Planning</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={ImgPc} alt="image PC icon" />
            </div>
            <div className="card-desc">
              <h3>Strategy and Planning</h3>
            </div>
          </div>
        </ContainerCard>
      </ServicesContent>
    </ServicesWrapper>
  );
};

export default OurServices;
