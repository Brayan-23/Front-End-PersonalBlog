import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cadastro from './pages/register/Register';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ListaTemas from './components/themes/listThemes/listThemes';
import FormularioTema from './components/themes/formTheme/formTheme';
import DeletarTema from './components/themes/deleteTheme/deleteTheme';
import ListaPostagens from './components/posts/listPosts/listPosts';
import FormularioPostagem from './components/posts/formPosts/formPost';
import DeletarPostagem from './components/posts/deletePost/deletePost';

import Perfil from './pages/profile/Profile';

function App() {
  
  return (
    <>
      <ToastContainer />
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
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
    </>
  );
}

export default App;