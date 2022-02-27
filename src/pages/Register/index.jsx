import Logo from "../../assets/Logo.svg";
import { Container, Form, Header, SelectionBox, Toast } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Redirect } from "react-router-dom";
import { red } from "@mui/material/colors";

const Register = ({ auth }) => {
  const history = useHistory();

  const handleSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "O campo deve conter apenas letras"
      ),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[0-9a-zA-Z$*&@#!%]{6,}$/,
        "A senha deve ter no mínimo 6 caracteres"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(handleSchema) });

  const toBack = () => {
    return history.push("/");
  };

  const handleCreateUser = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("E-mail já cadastrado!");
      });
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>

        <Button
          type="button"
          onClick={toBack}
          backgroundColor="#212529"
          color="var(--title)"
          hover="#343B41"
        >
          Voltar
        </Button>
      </Header>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <h1>Crie sua conta</h1>
        <h2>Rápido e grátis, vamos nessa</h2>
        <Input
          name="name"
          register={register}
          label="Nome"
          placeholder="Digite aqui seu nome"
          error={errors.name?.message}
        />
        <Input
          name="email"
          register={register}
          label="E-mail"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
          type="password"
        />
        <Input
          name="confirmPassword"
          register={register}
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword?.message}
          type="password"
        />
        <Input
          name="bio"
          register={register}
          label="Bio"
          placeholder="Digite um breve resumo sobre você"
          error={errors.bio?.message}
        />
        <Input
          name="contact"
          register={register}
          label="Contato"
          placeholder="Rede social, número de telefone, etc"
          error={errors.name?.message}
        />
        <SelectionBox>
          <label htmlFor="Selecionar módulo">Selecionar módulo</label>
          <select name="Selecionar módulo" {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">
              Primeiro Módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo (Frontend Avançado)">
              Segundo Módulo (Frontend Avançado)
            </option>
            <option value="Terceiro Módulo (Introdução ao Backend)">
              Terceiro Módulo (Introdução ao Backend)
            </option>
            <option value="Quarto Módulo (Backend Avançado)">
              Quarto Módulo (Backend Avançado)
            </option>
          </select>
        </SelectionBox>
        <Toast />
        <Button
          type="submit"
          backgroundColor="var(--color-primary-Disable)"
          color="white"
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
