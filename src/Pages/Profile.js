import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Theme from "../Components/Theme";
import NavBottom from "../Components/NavBottom";
import ProfileComponent from "../Components/profile";

const Profile = () => {
	return (
		<>
			<Theme>
				<ProfileComponent/>
			</Theme>
		<NavBottom/>
		</>
	);
};

export default Profile;
