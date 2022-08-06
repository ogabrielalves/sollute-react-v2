import style from './Price.module.scss';
import PriceCard from '../../components/PriceCard';
import PictureMonthly from '../../assets/img/PictureMonthly.svg';

function Price() {
    return (
        <div className={style.background}>
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
                        colorText= '#3E00FF'
                    />
                </div>

                <div className={style.priceCard}>
                    <PriceCard
                        typePlan='SEMESTRAL'
                        pricePlan={135}
                        imagePlan={PictureMonthly}
                        alt="Person typing"
                        variantButton='contained'
                        backgroundColor='#784DFF'
                        borderColor='#784DFF'
                        colorText= '#fff'
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
                        colorText= '#9F80FF'
                    />
                </div>
            </div>
        </div>
    );
}

export default Price;