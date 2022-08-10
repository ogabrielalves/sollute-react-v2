import style from './LoginCard.module.scss';
import { useNavigate } from 'react-router-dom';


import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginCard() {

  const navigate = useNavigate();

  return (
    <>
      <Card className={style.boxCard}>
        <CardContent>
          <DeviceHubIcon className={style.deviceHubIcon} sx={{ fontSize: '300%' }} />
          <p className={style.login}>
            Acesse seu perfil Sollute
          </p>
          <div>
            <TextField
              label="ﾠE-mail"
              size="medium"
              variant="standard"
              color="secondary"
              className={style.textField}
              sx={{ display: 'flex', justifyContent: 'center', padding: '0 10px', marginBottom: "20px" }}
            />
          </div>
          <div>
            <TextField
              margin="normal"
              autoComplete="current-password"
              label="ﾠSenha"
              type="password"
              size="medium"
              variant="standard"
              color="secondary"
              className={style.textField}
              sx={{ display: 'flex', justifyContent: 'center', padding: '0 10px', color: 'white' }}
            />
          </div>
          <a onClick={() => navigate("/forgot-password")} className={style.forgotPassword}>Esqueci minha senha</a>
          <div>
            <Button
              fullWidth
              className={style.btnSignIn}
              size='medium'
              endIcon={<LoginIcon />}
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, width: '350px' }}
            >
              Entrar
            </Button>
          </div>
        </CardContent>

        <CardActions className={style.signUp}>
          <p>Ainda não possui uma conta?</p>
          <Button size="small" color='secondary' href='/sign-up'>Cadastre-se</Button>
        </CardActions>
      </Card>
    </>
  );
}

