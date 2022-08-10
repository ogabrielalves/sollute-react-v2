import style from './Login.module.scss';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function Login() {

    return (
        <div className={style.background}>
            <div className={style.container}>
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
                            fontSize: '1.5rem'
                        }}
                    >
                        SOLLUTE
                    </Typography>
                </div>

                <Grid container spacing={3} className={style.login}>
                    <Grid xs={12} item>
                        <TextField id="outlined-basic" fullWidth label="E-mail" variant="outlined" color='secondary' />
                    </Grid>

                    <Grid xs={12} item>
                        <TextField id="outlined-basic" fullWidth label="Senha" variant="outlined" type={'password'} color='secondary' />
                    </Grid>

                    <Grid xs={12} item>
                        <Button className={style.buttonRegister} variant="contained" size='large' href='/prices' fullWidth startIcon={<LoginIcon />}>Entrar</Button>
                    </Grid>

                    <Grid xs={12} item>
                        <Link className={style.forgotPass} to={'/'}>Esqueceu a senha?</Link>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className={style.register} mt={4}>
                    <Grid xs={12} item>
                        <Typography
                            variant="h6"
                            noWrap
                            component="p"
                            sx={{
                                mr: 2,
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontSize: '16px',
                                color: '#A4A4A4'
                            }}
                        >
                            Ainda não tem uma conta na Sollute?
                        </Typography>
                    </Grid>
                    <Grid xs={12} item className={style.register}>
                        <Button className={style.buttonRegister} variant="outlined" size='large' href='/prices' fullWidth startIcon={<AddCircleOutlinedIcon />}>Criar nova conta</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Login;