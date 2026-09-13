import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import * as React from 'react';
// import Box from '@mui/joy/Box';
import { Alert, Box, Button, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
// import IconButton from '@mui/material';

// import { ColorPaletteProp } from '@mui/joy/styles';

export default function AlertVariousStates() {
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });
    const items = [
        { title: 'Success', color: 'success', icon: <CheckCircleIcon /> },

    ];
    return (

        <Box
            sx={{
                bgcolor: blueGrey[200],
                display: 'flex', 
                width: '20%', 
                flexDirection: 'column', 
                position: 'fixed', 
                bottom: '0', 
                left: '0', 
                marginBottom: "15px" ,
                marginLeft : '8px'
            }}

        >
            {items.map(({ title, color, icon }) => (
                <Alert
                    key={title}
                    sx={{ alignItems: 'flex-start' }}
                    startDecorator={icon}
                    variant="soft"
                    color={color}
                    endDecorator={
                        <Button variant="soft" color={color}>
                            <CloseRoundedIcon />
                        </Button>
                    }
                >
                    <div>
                        <div>{title}</div>
                        <Typography level="body-sm" color={color}>
                            This is a time-sensitive {title} Alert.
                        </Typography>
                    </div>
                </Alert>
            ))}
        </Box>

    );

}