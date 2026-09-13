
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueGrey } from '@mui/material/colors';
import { Box, Button, TextField, Typography } from '@mui/material';
<<<<<<< HEAD

=======
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
//Icon Login
import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
<<<<<<< HEAD
//react roter
import { useNavigate } from "react-router-dom";
// hook-form
import { useForm } from "react-hook-form";

=======
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
export default function Login() {
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });
<<<<<<< HEAD
    const { register, handleSubmit } = useForm(); // ۲. استفاده از هوک
    let navigate = useNavigate();
    const onSubmit = (data) => {
        // ۱. خواندن اطلاعات ذخیره شده از مرحله SignUp
        const savedData = localStorage.getItem("userData");

        if (!savedData) {
            alert("No users have registered!✖️");
            return;
        }
        const user = JSON.parse(savedData);

        // ۲. بررسی صحت اطلاعات
        if (data.email === user.email && data.password === user.password) {
            alert("The login was successful!✅");
            // اینجا می‌توانید کاربر را به صفحه پروفایل یا خانه هدایت کنید
            // مثلاً: navigate('/dashboard');

            // ذخیره وضعیت لاگین (اختیاری)
            localStorage.setItem("isLoggedIn", "true");
        } else {
            alert("The email or password is incorrect.");
        }
        navigate('/Home')
    };

=======

    const loginBtnHAndler = () => {
        console.log('3', 'loginBtnHAndler');

    }
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18

    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
<<<<<<< HEAD
                    alignItems: 'center',

=======
                    alignItems: 'center'
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
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
<<<<<<< HEAD

=======
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
                            borderTop: 1,
                            width: "100%",
                            marginTop: '20px',
                        }}
                    >

                    </Box>
                    {/* main */}
<<<<<<< HEAD
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{
                            width: '100%' ,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width :"100%"
                        }}>
                            <Box sx={{

                            }}>
                                <Box sx={{ marginTop: '20px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    <EmailIcon />
                                    <TextField
                                        label=" enter your Email"
                                        type="text"
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

                        </Box>
                        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Button type="submit" variant="contained" color='success' sx={{ margin: '10px' }}>
                                <Box sx={{ display: 'flex ', justifyContent: 'center ', alignItems: 'center', gap: '5px' }}>
                                    <Typography>Login</Typography>
                                    <LoginIcon />
                                </Box>
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Box>
        </ThemeProvider >
=======
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
>>>>>>> 865fee61cdd8d565eceaa68b5bf4d6889f306e18
    )
}
