import { Container } from "react-bootstrap";
import CustomNavbar from "../organisms/CustomNavbar";
import HeroSectionCarousel from "../organisms/HeroSectionCarousel";
const Home = () => {
  return (
    <>
      <Container fluid className="background p-0">
        <CustomNavbar />
        <Container>
          <HeroSectionCarousel url="http://www.omdbapi.com/?apikey=8eaa5d18&s=harry%20potter" />
        </Container>
      </Container>
    </>
  );
};
export default Home;
