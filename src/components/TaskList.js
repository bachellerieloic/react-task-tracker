import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import { red } from '@mui/material/colors'

export default function Tasks({ tasks, onToggle, onDelete }) {
	const tasksList = (
		<List
			sx={{
				width: '100%',
				mt: 2,
				maxWidth: 360,
				mx: 'auto',
				bgcolor: 'background.paper',
				textAlign: 'center',
			}}
		>
			{tasks.map((task) => {
				const labelId = `checkbox-list-label-${task.id}`

				return (
					<ListItem
						key={task.id}
						disablePadding
						sx={{ borderBottom: 1, paddingY: 2, borderColor: 'grey.400' }}
					>
						<ListItemIcon>
							<Checkbox
								edge='start'
								checked={task.checked}
								tabIndex={-1}
								disableRipple
								inputProps={{ 'aria-labelledby': labelId }}
								onClick={() => onToggle(task.id)}
							/>
						</ListItemIcon>
						<ListItemText
							id={labelId}
							primary={task.title}
							secondary={task.date.toDateString()}
						/>
						<IconButton aria-label='delete' onClick={() => onDelete(task.id)}>
							<Icon sx={{ color: red[400] }}>delete</Icon>
						</IconButton>
					</ListItem>
				)
			})}
		</List>
	)

	const noTasks = <h2>No Tasks To show</h2>

	return tasks.length > 0 ? tasksList : noTasks
}
