import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Layout from './pages/layout'
import Tarefas from './pages/Tarefas'
import Importante from './pages/Importante'
import Concluidas from './pages/Concluidas'
import AFazer from './pages/AFazer'
import Excluidas from './pages/Excluidas'
import AdcTarefas from './pages/Adctarefas'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/adctarefas" element={<Layout> <AdcTarefas/></Layout>} />
          <Route path="/tarefas" element={<Layout><Tarefas /></Layout>} />
          <Route path="/importante" element={<Layout><Importante /></Layout>} />
          <Route path="/concluidas" element={<Layout><Concluidas /></Layout>} />
          <Route path="/afazer" element={<Layout><AFazer /></Layout>} />
          <Route path="/excluidas" element={<Layout><Excluidas /></Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
