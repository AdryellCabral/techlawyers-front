import {
  Container,
  CardsContainer,
  InputContainer,
  NavContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [list, setList] = useState([]);

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const loadAll = () => {
    api
      .get("/list_lawyers")
      .then((response) => setList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAll();
  }, []);

  const loadAlphabetic = () => {
    api
      .get("/list_alphabetic")
      .then((response) => setList(response.data))
      .catch((err) => console.log(err));
  };

  const loadLastFive = () => {
    api
      .get("/list_last_5")
      .then((response) => setList(response.data))
      .catch((err) => console.log(err));
  };

  const onSubmitFunction = (data) => {
    const { filter_option } = data;
    filter_option === "all"
      ? loadAll()
      : filter_option === "alphabetic"
      ? loadAlphabetic()
      : loadLastFive();
  };

  const deleteButtonFunction = (id) => {
    api.delete(`delete_lawyer/${id}`).then(() => {
      loadAll();
      toast.success("Registro deletado com sucesso!");
    });
  };

  const noWayHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <span>Filtrar resultados</span>
        <section>
          <Select
            icon={FiSearch}
            placeholder="Todos os cadastros"
            register={register}
            name="filter_option"
            type="select"
            error=""
          >
            <option value="all">Todos os cadastros</option>
            <option value="alphabetic">Ordem aldabética</option>
            <option value="last_five">5 mais recentes</option>
          </Select>
          <Button type="submit">Pesquisar</Button>
        </section>
      </InputContainer>
      <CardsContainer>
        {list.map((item) => (
          <Card
            name={item.name}
            email={item.email}
            phone_number={item.phone_number}
            state={item.state}
            oab_num={item.oab_number}
            id={item._id}
            key={item._id}
            onClick={() => deleteButtonFunction(item._id)}
          />
        ))}
      </CardsContainer>
      <NavContainer>
        <Button type="submit" onClick={() => noWayHome()}>
          Home
        </Button>
        <Button whiteSchema>Cadastrar advogado</Button>
      </NavContainer>
    </Container>
  );
};

export default Dashboard;
