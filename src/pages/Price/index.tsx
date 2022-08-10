import style from './Price.module.scss';
import { useNavigate } from 'react-router-dom';

import PriceCard from '../../components/PriceCard';

import PictureMonthly from '../../assets/img/PictureMonthly.svg';
import PictureSemiannual from '../../assets/img/PictureSemiannual.svg';
import PictureYear from '../../assets/img/PictureYear.svg';

import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ResponsiveAppBar from '../../components/ResponsiveAppBar';


function Price() {

    const navigate = useNavigate();

    return (
        <>
            <ResponsiveAppBar />
            <div className={style.background}>
                <p className={style.title}>
                    ESCOLHA SEU PLANO
                </p>

                <div className={style.boxPrice}>
                    <div className={style.priceCard}>
                        <PriceCard
                            typePlan="MENSAL"
                            pricePlan={25}
                            imagePlan={PictureMonthly}
                            alt="Person typing"
                            variantButton='outlined'
                            backgroundColor='transparent'
                            borderColor='#0f3dff'
                            colorText='#0f3dff'
                        />
                    </div>

                    <div className={style.priceCardCenter}>
                        <PriceCard
                            typePlan='SEMESTRAL'
                            pricePlan={135}
                            imagePlan={PictureSemiannual}
                            alt="Person typing"
                            variantButton='contained'
                            backgroundColor='#0229cf'
                            borderColor='#0229cf'
                            colorText='#fff'
                        />
                    </div>

                    <div className={style.priceCard}>
                        <PriceCard
                            typePlan='ANUAL'
                            pricePlan={300}
                            imagePlan={PictureYear}
                            alt="People celebrating"
                            variantButton='outlined'
                            backgroundColor='transparent'
                            borderColor='#0424AC'
                            colorText='#0424AC'
                        />
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

export default Price;