import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBarContainer = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #252424;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
`;

const MenuItem = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 20px 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
    text-align: center;

    &:hover {
        background-color: #fff;
        color: #252424;
        transition: 0.7s;
    }
`;

const SideBar = () => {
    return (
        <SideBarContainer>
            <MenuItem to="/tarefas">Tarefas</MenuItem>
            <MenuItem to="/importante">Importante</MenuItem>
            <MenuItem to="/concluidas">Concluídas</MenuItem>
            <MenuItem to="/afazer">A fazer</MenuItem>
        </SideBarContainer>
    );
}

export default SideBar;