import styled from 'styled-components';
import React, { useState } from 'react';

const AdctarefasContainer = styled.div`
    /* Estilo geral */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Container principal */
.container {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

/* Cabeçalho */
h1 {
  text-align: center;
  color: #222;
  margin-bottom: 1.5rem;
}

/* Formulário */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Labels */
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Campos de entrada */
input[type="text"],
textarea,
input[type="date"],
select {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f9f9f9;
}

/* Campo de texto (textarea) */
textarea {
  resize: vertical;
  min-height: 100px;
}

/* Checkbox */
input[type="checkbox"] {
  margin-right: 0.5rem;
}

/* Botão de envio */
button {
  padding: 0.8rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Responsividade */
@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}

`

const Adctarefas = () => {
    const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataPrazo, setDataPrazo] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [status, setStatus] = useState("pendente");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      descricao,
      data_prazo: dataPrazo ? new Date(dataPrazo).toISOString() : null,
      isImportant,
      status,
    };

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTarefa),
      });

      if (response.ok) {
        alert("Tarefa criada com sucesso!");
        setTitulo("");
        setDescricao("");
        setDataPrazo("");
        setIsImportant(false);
      } else {
        alert("Erro ao criar tarefa. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      alert("Erro ao criar tarefa. Tente novamente mais tarde.");
    }
  };
  return (
    <AdctarefasContainer>
        <div>
      <h1>Criar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Título:
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Data de Prazo:
            <input
              type="date"
              value={dataPrazo}
              onChange={(e) => setDataPrazo(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Importante:
            <input
              type="checkbox"
              checked={isImportant}
              onChange={(e) => setIsImportant(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pendente">Pendente</option>
              <option value="concluida">Concluída</option>
            </select>
          </label>
        </div>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
    </AdctarefasContainer>
  );
}

export default Adctarefas;