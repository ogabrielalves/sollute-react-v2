import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Price from './pages/Price';
import Home from './pages/Home';
import Login from './pages/Login';
// import sign-up from './pages/SignUp'

function Rotas() {
    return (  
        <Router>
            <Routes>
                <Route path='/prices' element={<Price />} />
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />
                {/* <Route path='/cadastro' element={<sign-up />} /> */}
            </Routes>
        </Router>
    );
}

export default Rotas;

