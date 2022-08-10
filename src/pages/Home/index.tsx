import style from './Home.module.scss';

import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Button from '@mui/material/Button';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
    return (
        <div className={style.backgroundContainer}>
            <ResponsiveAppBar />          
            <div className={style.leftSide}>
                <div className={style.leftSideItem}>
                    <h1>ESTOQUE CERTO</h1>
                    <p>
                        A Empresa Sollute agora tem o Estoque Certo, o melhor serviço para te ajudar com o seu comercio.
                        <br />
                        O que há de melhor em te ajudar a ser maior:
                        <br />
                        <span>Integração, facilidade, automatização, eficiência e agilidade</span> em um só serviço.
                    </p>
                    <Button className={style.buttonRegister} variant="contained" href='/prices' endIcon={<ArrowForwardIcon />}>Conheça os planos</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;