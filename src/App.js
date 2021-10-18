import './App.css'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import * as React from 'react'
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
		},
	])
	const [showModal, setShowModal] = useState(false)
	const handleOpen = () => setShowModal(true)
	const handleClose = () => setShowModal(false)

	const handleSave = (task) => {
		setTasks([...tasks, task])
		handleClose()
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	const toggle = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, checked: !task.checked } : task
			)
		)
	}

	return (
		<div className='App'>
			<NavBar />
			<Button
				variant='contained'
				startIcon={<Icon>add_circle</Icon>}
				onClick={handleOpen}
				sx={{ mt: 4 }}
			>
				Add Task
			</Button>
			<AddTaskModal
				isOpen={showModal}
				onClose={handleClose}
				onSave={handleSave}
			/>
			<TaskList tasks={tasks} onToggle={toggle} onDelete={deleteTask} />
		</div>
	)
}

export default App
