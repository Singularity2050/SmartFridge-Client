import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from "../Components/Rate"
import Badge from "@mui/material/Badge";
export default function AlignItemsList(props) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            <ListItem alignItems="flex-start">
                <Rating heart={props.heart}/>
                <ListItemText
                    primary={props.data.foodName}
                    secondary={
                        <React.Fragment>

                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.data.ingredients.map((igd) =>(
                                    igd.itemName + ", "
                                ))}
                            </Typography>
                        </React.Fragment>
                    }
                    onClick={props.handler}
                />
                { props.data.remarks=="Eco" &&  <Badge  sx={{color:"white"}} badgeContent={props.data.remarks} color="success">

                </Badge>}
                { props.data.remarks=="Expiring" &&  <Badge  badgeContent={props.data.remarks} color="secondary">

                </Badge>}
            </ListItem>

            <Divider variant="inset" component="li" />
        </List>
    );
}