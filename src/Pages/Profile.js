import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Theme from "../Components/Theme";
import NavBottom from "../Components/NavBottom";

const Profile = () => {
	return (
		<>
			<Theme>
				<Stack direction="row" spacing={2}>
					<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
				</Stack>
			</Theme>
		<NavBottom/>
		</>
	);
};

export default Profile;
