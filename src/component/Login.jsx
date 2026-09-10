
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueGrey } from '@mui/material/colors';
import { Box, Button, TextField, Typography } from '@mui/material';
//Icon Login
import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
export default function Login() {
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });

    const loginBtnHAndler = () => {
        console.log('3', 'loginBtnHAndler');

    }

    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

            >
                {/* conteiner box */}
                <Box
                    sx={{
                        marginTop: '50px',
                        width: 564,
                        // height: 511,
                        borderRadius: 3,
                        bgcolor: blueGrey[200],
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'left',
                        alignItems: 'start',
                        padding: 5
                    }}
                >

                    {/* header container box */}
                    <Box
                        sx={{
                            width: '450px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {/* icon and name,Email */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <FaceIcon sx={{ fontSize: '70px' }} />
                            {/* ///////////////////////////////////////////////////////////// */}
                            <Typography variant="h4"> Login to your account </Typography>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                            borderTop: 1,
                            width: "100%",
                            marginTop: '20px',
                        }}
                    >

                    </Box>
                    {/* main */}
                    <Box sx={{ width: '100%' }}>

                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <EmailIcon />
                            <TextField
                                label=" enter your Email"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <PasswordIcon />
                            <TextField
                                label="password"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>


                    </Box>
                    <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Button onClick={loginBtnHAndler} variant="contained" color='success' sx={{ margin: '10px' }}>
                            <Box sx={{ display: 'flex ', justifyContent: 'center ', alignItems: 'center', gap: '5px' }}>
                                <Typography>Login</Typography>
                                <LoginIcon />
                            </Box>
                        </Button>

                    </Box>

                </Box>
            </Box>
        </ThemeProvider>
    )
}
