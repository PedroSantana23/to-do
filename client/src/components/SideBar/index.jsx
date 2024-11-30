import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Layers3, ListChecks, LayoutList, OctagonAlert, LogOut, Trash, PlusCircle } from 'lucide-react';

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

const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
`;

const MenuItem = styled(Link)`
    color: ${props => props.active ? '#252424' : '#fff'};
    background-color: ${props => props.active ? '#fff' : 'transparent'};
    text-decoration: none;
    margin: 15px;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    width: 350px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.7s;

    &:hover {
        background-color: #fff;
        color: #252424;
    }

    svg {
        margin-right: 8px; /* Add margin to the right of the icon */
    }
`;

const SideBar = () => {
    const [activeItem, setActiveItem] = useState("");

    return (
        <SideBarContainer>
            <MenuItemsContainer>
                <MenuItem to="/adctarefas" active={activeItem === "adctarefas"} onClick={() => setActiveItem("adctarefas")}><PlusCircle />Adicionar Tarefas</MenuItem>
                <MenuItem to="/tarefas" active={activeItem === "tarefas"} onClick={() => setActiveItem("tarefas")}><Layers3 />Tarefas</MenuItem>
                <MenuItem to="/importante" active={activeItem === "importante"} onClick={() => setActiveItem("importante")}><OctagonAlert />Importante</MenuItem>
                <MenuItem to="/concluidas" active={activeItem === "concluidas"} onClick={() => setActiveItem("concluidas")}><ListChecks />Concluídas</MenuItem>
                <MenuItem to="/afazer" active={activeItem === "afazer"} onClick={() => setActiveItem("afazer")}><LayoutList />A fazer</MenuItem>
                <MenuItem to="/excluidas" active={activeItem === "excluidas"} onClick={() => setActiveItem("excluidas")}><Trash />Excluídas</MenuItem>
            </MenuItemsContainer>
            <MenuItem to="/logout" onClick={() => setActiveItem("logout")}><LogOut />Logout</MenuItem>
        </SideBarContainer>
    );
}

export default SideBar;