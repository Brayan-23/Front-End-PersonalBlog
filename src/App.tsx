import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
    </>
);
}
export default App;