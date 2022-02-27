import { Container, Header, HelloUser, HeaderTechs, Box } from "./styles";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button";
import List from "../../components/List";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ModalCard from "../../components/ModalCard";

const Dashboard = ({ auth, setAuth }) => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user-data"));

  const [techs, setTechs] = useState(user.techs);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  if (!auth) {
    return <Redirect to="/" />;
  }

  const toBack = () => {
    sessionStorage.clear();
    setAuth(false);
    return history.push("/");
  };

  return (
    <Container>
      <Header>
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>

        <Button
          backgroundColor="#212529"
          color="var(--title)"
          hover="#343B41"
          type="button"
          onClick={toBack}
        >
          Sair
        </Button>
      </Header>
      <Box>
        <HelloUser>
          <h1>Olá, {user.name} </h1>
          <h2>{user.course_module}</h2>
        </HelloUser>
      </Box>
      <main>
        <HeaderTechs>
          <span>Tecnologias</span>
          <button onClick={handleOpen}>+</button>
        </HeaderTechs>
        <List techs={techs} setTechs={setTechs}></List>
        <ModalCard
          open={open}
          setOpen={setOpen}
          techs={techs}
          setTechs={setTechs}
        />
      </main>

      <ToastContainer />
    </Container>
  );
};

export default Dashboard;
