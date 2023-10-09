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
import ListaPostagens from './components/posts/listPosts/listPosts';
import FormularioPostagem from './components/posts/formPosts/formPost';
import DeletarPostagem from './components/posts/deletePost/deletePost';

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
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
    </>
  );
}
export default App;