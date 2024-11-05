import styled from "styled-components";
import { Link } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e9e9e9;
`;

const Form = styled.form`
  width: 20vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const Cadastro = () => {
  return (
    <FullPage>
      <Form>
        <h1>Cadastrar</h1>
        <Link to="/" >Login</Link>
      </Form>
    </FullPage>
  );
};

export default Cadastro;
