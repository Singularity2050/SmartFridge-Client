import React from "react";
import Theme from "../Components/Theme";
import NavBottom from "../Components/NavBottom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AlignItemsList from "../Components/RecipeList";
import Modal from "../Components/Modal";
import ReceptModel from "../Components/Modal";
import {recipes} from "../DummyData/dummyFile";

const Favourites = () => {
	return (
		<>
			<Theme>
				<ListItem component="div" disablePadding>
					<ListItemButton sx={{ height: 56 }}>
						<ListItemIcon>
							<DinnerDiningIcon color="primary" />
						</ListItemIcon>
						<ListItemText
							primary="Favorites"
							primaryTypographyProps={{
								color: 'primary',
								fontWeight: 'medium',
								variant: 'body2',
							}}
						/>
					</ListItemButton>
				</ListItem>
				<ReceptModel heart={1} data={[recipes[0]]}/>
			</Theme>
			<NavBottom/>
		</>
	);
};

export default Favourites;
