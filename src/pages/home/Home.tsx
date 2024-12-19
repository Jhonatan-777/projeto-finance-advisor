// sections
import Banner from "../../sections/banner/Banner";
import Form from "../../sections/form/Form";
import InfoPlatform from "../../sections/info-platform/InfoPlatform";
import OurServices from "../../sections/our-services/OurServices";

const Home = () => {
  return (
    <>
      <Banner />
      <InfoPlatform />
      <OurServices />
      <Form />
    </>
  );
};

export default Home;
