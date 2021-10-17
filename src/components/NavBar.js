import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button color="inherit" roun>One</Button>
                        <Button color="inherit">Two</Button>
                        <Button color="inherit">Three</Button>
                    </ButtonGroup>
                    <Button color="inherit">Logino</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
