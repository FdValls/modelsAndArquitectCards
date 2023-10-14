import { Box, IconButton, useColorScheme } from "@mui/material";
import { red } from "@mui/material/colors";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <>
            <Box
                sx={
                    mode === 'light'
                        ? {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: "hsl(240, 15%, 95%)",
                            color: red[600],
                            borderRadius: 1,
                            border: "3px solid black",
                            p: 1,

                        }
                        : {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'background.danger',
                            color: 'white',
                            borderRadius: 1,
                            border: "3px solid white",
                            p: 1,
                        }
                }
            >
                {mode}
                <IconButton sx={{ ml: 1 }} onClick={() => {
                    if (mode === 'light') {
                        setMode('dark');
                    } else {
                        setMode('light');
                    }
                }} color="inherit">
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
            <p className="parraf">Tag {'<p>'} afectado por variable global, en modo: {mode}</p>
            <div>
                <a >Tag ANCHOR afectado por variable global, en modo: {mode}</a>
                <br />
            </div>
            <p className="titleH1"> Title H1</p>
            <p className="titleH2"> Title H2</p>
        </>
    );
};

export default ModeSwitcher;
