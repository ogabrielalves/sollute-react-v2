import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8257e5',
        },
        secondary: {
            light: '#0066ff',
            main: '#e8c466',
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
                    backgroundColor: '#e8c466',
                    border: '2px solid #e8c466',
                    color:' #000',
                    transition: '0.4s',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#e8c466'
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
                    border: '2px solid #e8c466',
                    transition: '0.4s',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#e8c466',
                    '&:hover': {
                        backgroundColor: '#e8c466',
                        color: '#000',
                        border: '2px solid #e8c466'                   
                    }
                }
            }
        }
    }
})

export default theme;