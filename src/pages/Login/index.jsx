import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { toast, ToastContainer } from "react-toastify";
import { Redirect } from "react-router-dom";
import { Container, Form, ContainerMessage } from "./sytles";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button";

const Login = ({ auth, setAuth }) => {
  const history = useHistory();

  const handleSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        sessionStorage.clear();
        sessionStorage.setItem(
          "@Kenziehub:token",
          JSON.stringify(res.data.token)
        );
        sessionStorage.setItem("user-data", JSON.stringify(res.data.user));
        setAuth(true);
        return history.push("/dashboard");
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(handleSchema) });

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const toRegister = () => {
    return history.push("/register");
  };

  return (
    <Container>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
          error={errors.password?.message}
        />
        <ToastContainer />
        <Button type="submit" hover="#FF427F">
          Entrar
        </Button>
        <ContainerMessage>Ainda não tem uma conta?</ContainerMessage>
        <Button
          type="button"
          onClick={toRegister}
          backgroundColor="#868E96"
          color="#F8F9FA"
          hover="#343B41"
        >
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
