import style from './Login.module.scss'
import { useNavigate } from 'react-router-dom';

import LoginCard from '../../components/LoginCard'
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Title } from '@mui/icons-material';


function Login() {

    const navigate = useNavigate();

    return (
        <>
            <div className={style.background}>
                <h5 className={style.title}>Seja bem-vindo</h5>
                <div className={style.boxLogin}>
                    <div className={style.loginCard}>
                        <LoginCard/>
                    </div>
                </div>
                <Button
                    onClick={() => navigate("/")}
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    className={style.buttonBack}
                    size='medium'
                >
                    VOLTAR AO INICIO
                </Button>
            </div>
        </>
    );
}

export default Login;