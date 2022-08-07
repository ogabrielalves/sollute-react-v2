import style from './Price.module.scss';

import PriceCard from '../../components/PriceCard';
import PictureMonthly from '../../assets/img/PictureMonthly.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Price() {
    return (
        <div className={style.background}>
            <Typography variant="h3" sx={{ fontWeight: '500' }}>
                ESCOLHA SEU PLANO
            </Typography>

            <div className={style.boxPrice}>
                <div className={style.priceCard}>
                    <PriceCard
                        typePlan="MENSAL"
                        pricePlan={25}
                        imagePlan={PictureMonthly}
                        alt="Person typing"
                        variantButton='outlined'
                        backgroundColor='transparent'
                        borderColor='#3E00FF'
                        colorText='#3E00FF'
                    />
                </div>

                <div className={style.priceCardCenter}>
                    <PriceCard
                        typePlan='SEMESTRAL'
                        pricePlan={135}
                        imagePlan={PictureMonthly}
                        alt="Person typing"
                        variantButton='contained'
                        backgroundColor='#784DFF'
                        borderColor='#784DFF'
                        colorText='#fff'
                    />
                </div>

                <div className={style.priceCard}>
                    <PriceCard
                        typePlan='ANUAL'
                        pricePlan={300}
                        imagePlan={PictureMonthly}
                        alt="People celebrating"
                        variantButton='outlined'
                        backgroundColor='transparent'
                        borderColor='#9F80FF'
                        colorText='#9F80FF'
                    />
                </div>
            </div>
            <Button variant="contained" startIcon={<ArrowBackIcon/>} sx={{backgroundColor: '#3E00FF', height:30, width:230}}>
                VOLTAR AO INICIO
            </Button>
        </div>
    );
}

export default Price;