import { StyledButton } from "./styles";

const Button = ({
  children,
  backgroundColor = "#FF577F",
  color = "white",
  ...rest
}) => {
  return (
    <StyledButton {...rest} backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
