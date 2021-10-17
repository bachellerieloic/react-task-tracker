import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavBar from "./components/NavBar";
import IconButton from "@mui/material/IconButton";
import Icon from '@mui/material/Icon';
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <IconButton aria-label="delete" onClick={}>
            <Icon>add_circle</Icon>
        </IconButton>
        <Typography>Task Tracker</Typography>
        <Button variant="contained">Hello World</Button>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </div>
  );
}

export default App;
