import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export default function Tasks({ tasks, onToggle, onDelete }) {
    return (
        <List className="mt-2" sx={{ width: '100%', mt: 4, maxWidth: 360, mx: 'auto', bgcolor: 'background.paper', textAlign: 'center' }}>
            {tasks.map((task) => {
                const labelId = `checkbox-list-label-${task.id}`;

                return (
                    <ListItem
                        key={task.id}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense onClick={() => onToggle(task.id)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={task.checked}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={task.title} secondary={task.date.toDateString()}/>
                            <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
                                <Icon>delete</Icon>
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                );
            }
            )}
        </List>
    );
};
