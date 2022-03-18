import { AnimationContainer, Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiMapPin, FiPhone, FiHash } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    phone_number: yup
      .string()
      .min(9, "Número de telefone inválido!")
      .required("Campo obrigatório!")
      .max(11, "Número de telefone inválido!"),
    state: yup
      .string()
      .required("Campo obrigatório!")
      .max(2, "Somente a UF do seu estado de atuação!"),
    oab_number: yup
      .string()
      .required("Campo obrigatório!")
      .max(8, "Deve ter no máximo 8 dígitos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/register", data)
      .then((_) => {
        toast.success("Cadastro efetuado lindamente!");
        return history.push("/");
      })
      .catch((err) => {
        toast.error("Erro ao efetuar cadastro, tente outro email.");
      });
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              name="name"
              error={errors.name?.message}
            />
            <Input
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiPhone}
              label="Telefone"
              placeholder="Seu telefone"
              name="phone_number"
              error={errors.phone_number?.message}
            />
            <Input
              register={register}
              icon={FiMapPin}
              label="UF - Estado"
              placeholder="Qual estado atua"
              name="state"
              error={errors.state?.message}
            />
            <Input
              register={register}
              icon={FiHash}
              label="Nº da O.A.B"
              placeholder="Seu nº da o.a.b"
              name="oab_number"
              error={errors.oab_number?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              É um administrador? Faça seu <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
