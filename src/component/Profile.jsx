

import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
//icone
import Face6Icon from '@mui/icons-material/Face6';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';

export default function Profile() {
    // const [user, setUser] = useState(null);
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790', // رنگ پس‌زمینه کل صفحه
            },
        },
    });



    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     // خواندن داده از localStorage
    //     const storedData = localStorage.getItem("userData");
    //     if (storedData) {
    //         setUser(JSON.parse(storedData)); // تبدیل رشته به آبجکت
    //     }
    // }, []);

    // if (!user) return <p>Loading...</p>;

    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />
            <Box sx={{
                height: '80vh',
                width: '1800',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        // justifyContent: 'space-around',
                        gap: '150px',
                        alignItems: 'center'
                    }}
                >

                    <Box
                        sx={{
                            marginTop: '50px',
                            width: 278,
                            height: 290,
                            borderRadius: 3,
                            bgcolor: blueGrey[200],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                            alignItems: 'start',
                            padding: 3,
                            position: 'relative',
                        }}
                    >
                        {/* <Typography variant="h3"> Profile Page </Typography>
                    <Typography> name :{user.firstName}</Typography>
                    <Typography> LastName:{user.lastName}</Typography>
                    <Typography>Email: {user.email}</Typography> */}
                        <AccountCircleIcon fontSize='100px' sx={{
                            position: 'absolute',
                            // Botton : '50px' ,
                            fontSize: '50px',
                            top: 0,
                            left: 0,

                        }} />
                        <Typography sx={{ borderBottom: 1, marginBottom: 2, marginTop: 2.5 }} variant="h4"> your Profile: </Typography>

                        <Stack sx={{

                            gap: '20PX'
                        }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <SupervisorAccountIcon />
                                <Typography>name : mm</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <DriveFileRenameOutlineIcon />
                                <Typography>LastName: mmd</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <EmailIcon />
                                <Typography>Email: gmail.com </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <PasswordIcon />
                                <Typography>Password:  ******** </Typography>
                            </Box>


                        </Stack>
                    </Box>
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
                                height: 511,
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
                                    <div>
                                        <Typography>your name</Typography>
                                        <Typography>your Email</Typography>
                                    </div>
                                </Box>
                                <Box>
                                    <Typography variant="h4"> change profile </Typography>
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
                            <Box>
                                <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography> Name </Typography>
                                    <TextField
                                        label="name"
                                        type="password"
                                        variant="standard"
                                        sx={{ width: '300px' }}
                                    />
                                </Box>
                                <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography> last name </Typography>
                                    <TextField
                                        label="last name"
                                        type="password"
                                        variant="standard"
                                        sx={{ width: '300px' }}
                                    />
                                </Box>
                                <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography> Email </Typography>
                                    <TextField
                                        label="Email"
                                        type="password"
                                        variant="standard"
                                        sx={{ width: '300px' }}
                                    />
                                </Box>
                                <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography> password </Typography>
                                    <TextField
                                        label="password"
                                        type="password"
                                        variant="standard"
                                        sx={{ width: '300px' }}
                                    />
                                </Box>

                                <Box sx={{ margin: '20px' }}>
                                    <Button variant="contained" color='error' sx={{ margin: '10px' }}>seve change </Button>
                                    <Button variant="contained">rest</Button>
                                </Box>

                            </Box>

                        </Box>
                    </Box>


                </Box>


            </Box>
        </ThemeProvider >
    );
}
