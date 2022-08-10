import style from './Contact.module.scss';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

function Contact() {
    return (
        <div className={style.background}>
            <div className={style.logo}>
                <DeviceHubIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        fontSize: '1.5rem',
                    }}
                >
                    SOLLUTE
                </Typography>
            </div>
            <div className={style.container}>

                <div className={style.titleTop}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="p"
                        sx={{
                            mr: 2,
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            color: 'inherit',
                            fontSize: '1.5rem',
                            mb: 2
                        }}
                    >
                        Contate-nos :D
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="p"
                        sx={{
                            mr: 2,
                            fontFamily: 'Roboto',
                            fontWeight: 400,
                            color: 'inherit',
                            fontSize: '1rem'
                        }}
                    >
                        Entre em contato conosco para tirar suas dúvidas ou resolver problemas!
                    </Typography>
                </div>
                <div className={style.comboItems}>
                    <Button className={style.item} variant="contained" size='large' startIcon={<LocationOnIcon />}></Button>
                    <Button className={style.itemCenter} variant="contained" size='medium' startIcon={<LocalPhoneIcon />}></Button>
                    <Button className={style.item} variant="contained" size='medium' startIcon={<EmailIcon />}></Button>
                </div>

                <div className={style.box}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="p"
                        sx={{
                            mr: 2,
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            color: '#000',
                            fontSize: '1rem'
                        }}
                    >
                        Formulário de Contato
                    </Typography>
                    <div>
                        <Grid container spacing={2} mt={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" fullWidth label="Seu nome completo" variant="outlined" color='secondary' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic" fullWidth label="Seu e-mail" variant="outlined" color='secondary' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic" fullWidth label="Seu telefone" variant="outlined" color='secondary' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" multiline
                                    rows={4} fullWidth label="Escreva um breve resumo" variant="outlined" color='secondary' />
                            </Grid>
                            <Grid item xs={12} md={6} mt={4}>
                                <Button variant="contained" fullWidth size='medium' startIcon={<SendIcon />}>Enviar</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div></div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
