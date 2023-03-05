import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from "../Components/Rate"
export default function AlignItemsList(props) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <Rating heart={props.heart}/>
                <ListItemText
                    primary="ketchup Butter Soup"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >

                            </Typography>
                            {"This cuisine is Abhishek's favorite food. Warning!! you could die"}
                        </React.Fragment>
                    }
                    onClick={props.handler}
                />

            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}