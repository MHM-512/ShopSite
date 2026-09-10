import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueGrey } from '@mui/material/colors';
import { Box, Button, TextField, Typography } from '@mui/material';

// Icon Singuo
import Face6Icon from '@mui/icons-material/Face6';

export default function SignUp() {
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });


    const onSubmit = (data) => {
        const dataFormInformation = data;
        // localStorage.setItem("userData", JSON.stringify(data));
        console.log(dataFormInformation);
        // navigate("/profile");
    };

    const singUpBtnHandler = () => {
        console.log('1', 'singUpBtnHandler');
        
    }
    const IHaveAcconutBtnHandler = () => {
    console.log('2' , 'IHaveAcconutBtnHandler');
    }
    


    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />
            <Box ///fsf
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
                            <Face6Icon sx={{ fontSize: '70px' }} />
                            <Typography variant="h4"> singUp account </Typography>
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
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <TextField
                                label="enter your name"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <TextField
                                label="enter your last name"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <TextField
                                label="enter your Email"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <TextField
                                label="password"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>
                        <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <TextField
                                label="cheked pasword"
                                type="password"
                                variant="outlined"
                                sx={{ width: '300px' }}
                            />
                        </Box>

                    </Box>
                    <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Button onClick={singUpBtnHandler} variant="contained" color='success' sx={{ margin: '10px' }}>sing up</Button>
                        <Button onClick={IHaveAcconutBtnHandler} variant="text"><Typography>I have an account</Typography></Button>
                    </Box>

                </Box>
            </Box>



        </ThemeProvider>

    );
}
