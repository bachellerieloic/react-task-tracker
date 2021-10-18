import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import Icon from '@mui/material/Icon'

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexGrow: 1,
							fontWeight: 'bold',
						}}
					>
						Task Tracker
						<Icon sx={{ ml: 1 }} fontSize='large'>
							list
						</Icon>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
