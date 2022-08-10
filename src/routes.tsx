import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Price from './pages/Price';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';

function Rotas() {
    return (  
        <Router>
            <Routes>
                <Route path='/prices' element={<Price />} />
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default Rotas;

