import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e8c466',
        },
        secondary: {
            light: '#0066ff',
            main: '#0424AC',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: 6,
                    backgroundColor: '#0424AC',
                    border: '2px solid #0424AC',
                    color:' #fff',
                    transition: '0.4s',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#0424AC'
                    }
                },
                containedInfo: {
                    backgroundColor: '#FFD500',
                    color: '#000000',
                    transition: '0.4s',
                    cursor: 'pointer'
                },
                outlined: {
                    borderRadius: 6,
                    border: '2px solid #0424AC',
                    boxShadow:  'inset 0 0 0 0 #0424AC',
                    transition: 'ease-out 0.3s',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#0424AC',
                    '&:hover': {
                        boxShadow:  'inset 300px 0 0 0 #0424AC',
                        backgroundColor: '#0424AC',
                        color: '#fff',
                        border: '2px solid #0424AC'                   
                    }
                }
            }
        }
    }
})

export default theme;