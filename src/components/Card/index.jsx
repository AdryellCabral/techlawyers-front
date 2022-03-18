import { Container, Content } from "./styles";
import { FiClipboard, FiHash, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Button from "../Button";

export const Card = ({
  name,
  email,
  phone_number,
  state,
  oab_num,
  onClick,
}) => {
  return (
    <Container>
      <span>
        <FiClipboard /> {name}
      </span>
      <hr />
      <Content>
        <div>
          <FiMail /> {email}
        </div>
        <div>
          <FiPhone /> {phone_number}
        </div>
        <div>
          <FiMapPin /> {state}
        </div>
        <div>
          <FiHash /> {oab_num}
        </div>
      </Content>
      <Button onClick={onClick}>Deletar</Button>
    </Container>
  );
};

export default Card;
