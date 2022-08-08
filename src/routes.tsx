import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Price from './pages/Price';
import Home from './pages/Home';

function Rotas() {
    return (  
        <Router>
            <Routes>
                <Route path='/prices' element={<Price />} />
                <Route path='/' element={<Home />}/>

            </Routes>
        </Router>
    );
}

export default Rotas;

