import React from 'react';
import './App.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/register/Register';
import Home from './pages/home/Home';
import ListaTemas from './components/themes/listThemes/listThemes';
import FormularioTema from './components/themes/formTheme/formTheme';
import DeletarTema from './components/themes/deleteTheme/deleteTheme';


function App() {
  return (
    <>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
    </>
  );
}
export default App;