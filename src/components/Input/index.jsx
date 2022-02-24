import { Container, InputContainer, Label } from "./styles";

const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
