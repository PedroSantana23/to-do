import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Layout from './pages/layout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/home" element={<Layout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
