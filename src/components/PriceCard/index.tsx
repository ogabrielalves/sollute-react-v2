import style from './PriceCard.module.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

interface Props {
  typePlan: string;
  pricePlan: number;
  imagePlan: string;
  alt: string;
  variantButton: "text" | "outlined" | "contained" | undefined;
  backgroundColor: string;
  borderColor: string;
  colorText: string;
}

export default function PriceCard({ typePlan, pricePlan, imagePlan, alt, variantButton, backgroundColor, borderColor, colorText}: Props) {
  return (
    <>
      <Card className={style.boxCard}>
        <CardContent>
          <p className={style.typePlanTitle}>
            {typePlan}
          </p>
          <h2 className={style.boxPrice}>
            R$
            <h1 className={style.price}>
              {pricePlan}
            </h1>
            /mês
          </h2>
          <div className={style.boxImage}>
            <img src={imagePlan} alt={alt} />
          </div>
        </CardContent>
        <CardActions className={style.cardActions}>
          <Button variant={variantButton} sx={{ backgroundColor: `${backgroundColor}`, border: `2px solid ${borderColor}`, color: `${colorText}`, height: 30, width: 130, fontWeight: '500'}}>ASSINAR</Button>
        </CardActions>
      </Card>

      <div style={{ width: "100%", height: '3%', backgroundColor: `${borderColor}`, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, boxShadow: '0 4px 30px 0 rgba(0,0,0,0.61)' }}></div>
    </>
  );
}
