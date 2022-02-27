import { StyledButton } from "./styles";

const Button = ({
  children,
  backgroundColor = "#FF577F",
  color = "white",
  hover,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      backgroundColor={backgroundColor}
      color={color}
      hover={hover}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
