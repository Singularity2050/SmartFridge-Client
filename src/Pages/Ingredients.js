import * as React from 'react';
import NavBottom from "../Components/NavBottom";
import Theme from "../Components/Theme"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import IngredientDataTable from "../Components/DataTable"
export default function CustomizedList() {

	return (
		<>
			<Theme>
				<ListItem component="div" disablePadding>
					<ListItemButton sx={{ height: 56 }}>
						<ListItemIcon>
							<DinnerDiningIcon color="primary" />
						</ListItemIcon>
						<ListItemText
							primary="Spicy Pork Recipe"
							primaryTypographyProps={{
								color: 'primary',
								fontWeight: 'medium',
								variant: 'body2',
							}}
						/>
					</ListItemButton>
				</ListItem>
				<IngredientDataTable/>
			</Theme>
			<NavBottom/>
		</>
	);
}
