import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Header, Form, SelectionBox, ButtonBox } from "./styles";
import Button from "../Button";
import { api } from "../../services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ModalUpdate = ({ tech, open, setOpen, techs, setTechs }) => {
  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: transparent;
  `;

  const style = {
    width: "90%",
    maxWidth: "369px",
    height: "342px",
    color: "#F8F9FA",
    background: "#212529",
    boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const handleClose = () => setOpen(false);

  const pushUpdate = (obj) => {
    const filtered = techs.filter((item) => item.title !== obj.title);
    setTechs([...filtered, obj]);
  };

  const [token] = useState(
    JSON.parse(sessionStorage.getItem("@Kenziehub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const handleUpdateTech = (data) => {
    api
      .put(`/users/techs/${tech.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        const obj = { title: tech.title, status: data.status };
        pushUpdate(obj);
        console.log("Sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Header>
            <h2 id="unstyled-modal-title">Tecnologia detalhes</h2>
            <button onClick={handleClose}>X</button>
          </Header>
          <Form onSubmit={handleSubmit(handleUpdateTech)}>
            <label>
              Nome
              <input type="text" value={tech.title} readOnly={true} />
            </label>

            <SelectionBox>
              <label>Selecionar status</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </SelectionBox>

            <ButtonBox>
              <Button type="submit" backgroundColor="#59323F;" color="white">
                Salvar alterações
              </Button>
              <Button backgroundColor="#868E96;" color="white">
                Excluir
              </Button>
            </ButtonBox>
          </Form>
        </Box>
      </StyledModal>
    </div>
  );
};

export default ModalUpdate;
