import { AnimationContainer, Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório!")
      .matches("admin", "O usuário nesse caso é admin"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .matches("admin", "A senha nesse caso é admin"),
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
    toast.success(
      "Esse login é só para fins de demonstração. As rotas não estão protegidas."
    );
    history.push("/dashboard");
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome de usuário"
              placeholder="adimn"
              name="username"
              error={errors.username?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              placeholder="admin"
              name="password"
              type="password"
              error={errors.password?.message}
            />

            <Button type="submit">Entrar</Button>
            <p>
              Não é um administrador? Faça seu{" "}
              <Link to="/signup">cadastro</Link>.
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
