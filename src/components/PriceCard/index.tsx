import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Card sx={{ minWidth: 280, maxWidth: 280, height: 500, borderRadius: 0, boxShadow: '0 4px 30px 0 rgba(0,0,0,0.61)' }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, fontWeight: '500', textAlign: 'center', marginBottom: '20px', marginTop: '30px' }} gutterBottom>
            {typePlan}
          </Typography>
          <Typography variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'  }}>
            R$
            <Typography variant="h4" sx={{fontWeight: '500'}}>{pricePlan}</Typography>
            /mês
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <img src={imagePlan} alt={alt} width={180} />
          </div>
        </CardContent>
        <CardActions sx={{justifyContent: 'center' }}>
          <Button variant={variantButton} sx={{ backgroundColor: `${backgroundColor}`, border: `2px solid ${borderColor}`, color: `${colorText}`, height: 30, width: 130, marginTop: '70px', fontWeight: '500'}}>ASSINAR</Button>
        </CardActions>
      </Card>

      <div style={{ width: "100%", height: '3%', backgroundColor: `${borderColor}`, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, boxShadow: '0 4px 30px 0 rgba(0,0,0,0.61)' }}></div>
    </>
  );
}
