import React from 'react';
import styled from 'styled-components';
import { Check, Trash2, Pencil } from 'lucide-react';

const TarefasContainer = styled.div`
    width: 80%;
    padding: 20px;
    background-color: #252424;
    min-height: 50vh;
    max-height: 70vh; /* Define a altura máxima para o contêiner */
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    overflow-y: auto; /* Adiciona a barra de rolagem vertical */
`;

const TarefaItem = styled.div`
    background-color: #464343;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 90%;
    height: auto; /* Ajusta a altura automaticamente */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BotoesContainer = styled.div`
    display: flex;
    gap: 10px;
    `;

const BotaoExcluir = styled.button`
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    align-self: flex-end; /* Alinha o botão à direita */
    &:hover {
        background-color: #ff3333;
    }
`;

const BotaoConcluir = styled.button`
    background-color: #159e15;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    align-self: flex-end; /* Alinha o botão à direita */
    &:hover {
        background-color: #1abc1a;
    }
`;

const BotaoEditar = styled.button`
    background-color: #0000ff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    align-self: flex-end; /* Alinha o botão à direita */
    &:hover {
        background-color: #3333ff;
    }
`;


const Tarefas = () => {
    const tasks = [
        { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição da Tarefa 1', status: 'Pendente' },
        { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição da Tarefa 2', status: 'Concluída' },
        { id: 3, titulo: 'Tarefa 3', descricao: 'Descrição da Tarefa 3', status: 'Pendente' },
        { id: 4, titulo: 'Tarefa 4', descricao: 'Descrição da Tarefa 4', status: 'Pendente' },
        { id: 5, titulo: 'Tarefa 5', descricao: 'Descrição da Tarefa 5', status: 'Concluída' },
        { id: 6, titulo: 'Tarefa 6', descricao: 'Descrição da Tarefa 6', status: 'Pendente' },
        { id: 7, titulo: 'Tarefa 7', descricao: 'Descrição da Tarefa 7', status: 'Pendente' },
        { id: 8, titulo: 'Tarefa 8', descricao: 'Descrição da Tarefa 8', status: 'Pendente' },
        { id: 9, titulo: 'Tarefa 9', descricao: 'Descrição da Tarefa 9', status: 'Concluída' },
        { id: 10, titulo: 'Tarefa 10', descricao: 'Descrição da Tarefa 10', status: 'Pendente' },   
    ];

    return (
        <TarefasContainer>
            <h1>Tarefas</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TarefaItem key={task.id}>
                        <h2>{task.titulo}</h2>
                        <p>{task.descricao}</p>
                        <p>Status: {task.status}</p>
                        <BotoesContainer>
                            <BotaoConcluir><Check /></BotaoConcluir>
                            <BotaoExcluir><Trash2 /></BotaoExcluir>
                            <BotaoEditar><Pencil /></BotaoEditar>
                        </BotoesContainer>
                    </TarefaItem>
                ))
            ) : (
                <p>Nenhuma tarefa encontrada.</p>
            )}
        </TarefasContainer>
    );
}

export default Tarefas;