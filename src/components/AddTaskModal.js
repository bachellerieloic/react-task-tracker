import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Icon from '@mui/material/Icon'
import { useState } from 'react'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 10,
	pt: 2,
	pb: 5,
	px: 5,
}

const AddTaskModal = ({ isOpen, onClose, onSave }) => {
	const [title, setTitle] = useState('')
	const handleChange = (event) => {
		setTitle(event.target.value)
	}
	return (
		<div>
			<Modal
				open={isOpen}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Add Task
					</Typography>
					<form className='add-task-form'>
						<div>
							<TextField
								id='outlined-basic'
								label='Title'
								variant='outlined'
								size='small'
								onChange={handleChange}
								sx={{ mt: 2 }}
							/>
						</div>

						<Button
							color='success'
							variant='contained'
							startIcon={<Icon>save</Icon>}
							sx={{ mt: 2 }}
							onClick={() =>
								onSave({
									title: title,
									checked: false,
									date: new Date(),
								})
							}
						>
							Save
						</Button>
					</form>
				</Box>
			</Modal>
		</div>
	)
}

export default AddTaskModal
