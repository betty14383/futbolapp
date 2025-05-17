import { Container, Image } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width="200px" />
      <h1 className="my-2 text-uppercase title">Football Legends</h1>
    </Container>
  );
};

export default Header;
