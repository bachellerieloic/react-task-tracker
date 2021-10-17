import './App.css';
import NavBar from "./components/NavBar";
import IconButton from "@mui/material/IconButton";
import Icon from '@mui/material/Icon';
import TaskList from './components/TaskList';
import * as React from "react";
import { useState } from 'react'



const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Do groceries',
            date: new Date(),
            checked: false,
        },
        {
            id: 2,
            title: 'Pick Up Mail',
            date: new Date(),
            checked: false,
        },
        {
            id: 3,
            title: 'Dentist Appointment',
            date: new Date(),
            checked: true,
        }
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggle = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, checked: !task.checked } : task )
        )
    }

    return (
        <div className="App">
            <NavBar/>
            { tasks.length > 0
                ? <TaskList tasks={tasks} onToggle={toggle} onDelete={deleteTask} />
                : 'No Tasks to show'
            }
            <IconButton aria-label="add">
                <Icon>add_circle</Icon>
            </IconButton>
        </div>
    );
}

export default App;
