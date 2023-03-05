import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Register = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Stack spacing={2}>
				<Item>
					<AccountCircleIcon />
				</Item>
				<Item>
					<Grid sx={2}></Grid>
					<Grid sx={2}></Grid>
				</Item>
				<Item>Item 3</Item>
			</Stack>
		</Box>
	);
};
export default Register;
