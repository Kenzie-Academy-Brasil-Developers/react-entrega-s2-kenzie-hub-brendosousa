import ModalUpdate from "../ModalUpdate";
import { TechList, CardTech } from "./styles";
import { useState } from "react";

const List = ({ techs, setTechs }) => {
  const [open, setOpen] = useState(false);
  const [tech, setTech] = useState({});
  const handleOpen = (tech) => {
    setOpen(true);
    setTech(tech);
  };

  return (
    <TechList>
      {techs.length > 0 ? (
        techs.map((tech) => (
          <CardTech key={tech.id} onClick={() => handleOpen(tech)}>
            <h1>{tech.title}</h1>
            <span>{tech.status}</span>
          </CardTech>
        ))
      ) : (
        <h1>Adicione uma tecnologia</h1>
      )}
      <ModalUpdate
        tech={tech}
        open={open}
        setOpen={setOpen}
        techs={techs}
        setTechs={setTechs}
      />
    </TechList>
  );
};

export default List;
