import styled from "styled-components";
import { Link } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #252424;
`;

const Form = styled.form`
  width: 30vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #525050;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  gap: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 15px;
  gap: 5px;
`;

const Input = styled.input`
  width: 90%;
  height: 25px;
  margin-top: 5px; /* Adiciona espaço entre o span e o input */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
    width: 60%;
    height: 50px;
    color: #fff;
    background: #0597d1;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: #087397;
        transition: 0.5s;
    }
`;

const StyledLink = styled(Link)`
  color: #0099ff;
  text-decoration: none;
`;

const Cadastro = () => {
  return (
    <FullPage>
      <Form>
        <h1>Cadastrar</h1>
        <InputContainer>
          <span>E-mail</span>
          <Input type="email" placeholder="Digite seu e-mail"></Input>
          <span>Nome</span>
          <Input type="email" placeholder="Digite seu nome"></Input>
          <span>Senha</span>
          <Input type="password" placeholder="Digite sua senha"></Input>
          <Input type="password" placeholder="Repita a senha"></Input>
        </InputContainer>
        <Button>Cadastrar</Button>
        <StyledLink to="/">Voltar para o Login</StyledLink>
      </Form>
    </FullPage>
  );
};

export default Cadastro;
