import { Container, InputContainer } from "./styles";

const Select = ({
  children,
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <select {...register(name)} {...rest}>
          {children}
        </select>
      </InputContainer>
    </Container>
  );
};

export default Select;
