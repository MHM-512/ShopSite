

import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, TextField, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Face6Icon from '@mui/icons-material/Face6';

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

    useEffect(() => {
        // خواندن داده از localStorage
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            setUser(JSON.parse(storedData)); // تبدیل رشته به آبجکت
        }
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <ThemeProvider theme={themeBG}>
            {/* ۲. اعمال استایل‌های پایه و پس‌زمینه بدنه */}
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
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
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Face6Icon
                            sx={{
                                fontSize: '70px'
                            }}
                        />
                        <Box>
                            <Typography>your name</Typography>
                            <Typography>your Email</Typography>
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
                    <div>
                        {/* <Typography variant="h3"> Profile Page </Typography>
                        <Typography> name :{user.firstName}</Typography>
                        <Typography> LastName:{user.lastName}</Typography>
                        <Typography>Email: {user.email}</Typography> */}
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
