import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          Tech<span>.</span>lawyers
        </h1>
        <span>O maior data center de advogados do Brasil</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
