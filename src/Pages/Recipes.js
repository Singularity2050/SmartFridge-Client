import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Theme from "../Components/Theme";
import NavBottom from "../Components/NavBottom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AlignItemsList from "../Components/RecipeList";
const Recipes = () => {
    return (
        <>
            <Theme>
                <ListItem component="div" disablePadding>
                    <ListItemButton sx={{ height: 56 }}>
                        <ListItemIcon>
                            <DinnerDiningIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Recipe"
                            primaryTypographyProps={{
                                color: 'primary',
                                fontWeight: 'medium',
                                variant: 'body2',
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <AlignItemsList/>
            </Theme>
            <NavBottom/>
        </>
    );
};

export default Recipes;
