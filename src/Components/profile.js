import React from 'react';
import '../App.css';
import { ResponsiveLine } from '@nivo/line';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBottom from '../Components/NavBottom';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { globalState } from '../recoil';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}));

const data = [
	{
		id: 'line1',
		color: 'hsl(43, 70%, 50%)',
		data: [
			{
				x: 'Jan',
				y: 197,
			},
			{
				x: 'Feb',
				y: 108,
			},
			{
				x: 'Mar',
				y: 99,
			},
			{
				x: 'Apr',
				y: 22,
			},
			{
				x: 'May',
				y: 154,
			},
			{
				x: 'June',
				y: 52,
			},
			{
				x: 'July',
				y: 142,
			},
			{
				x: 'Oct',
				y: 107,
			},
			{
				x: 'Nov',
				y: 202,
			},
			{
				x: 'Dec',
				y: 38,
			},
		],
	},
];

const line1Color = 'green';

export default function ProfileComponent(props) {
	const globalUser = useRecoilValue(globalState);
	console.log(globalUser);
	console.log(props);
	const navigate = useNavigate();
	const logout = () => {
		navigate('/');
	};
	return (
		<>
			<Typography variant="h4" margin={1} marginTop={3}>
				{' '}
				Abisek's Fridge
			</Typography>
			<p style={{margin:0, marginLeft:10}}>Current Eco Point: 40</p>
			<p style={{margin:0, marginLeft:10}}>My Tier: Platinum</p>
			<hr />
			<div className="wrapper">
				<div className="graphContainer">
					<ResponsiveLine
						curve="monotoneX"
						data={data}
						colors={[line1Color]}
						layers={['grid', 'axes', 'lines', 'markers', 'legends']}
						axisLeft={{
							legend: 'My Eco Point ($)',
							legendPosition: 'middle',
							legendOffset: -40,
						}}
						theme={getColoredAxis(line1Color)}
						margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
					/>
				</div>
			</div>
			<TextField
				id="outlined-read-only-input"
				label="My Contact Number"
				defaultValue="631-290-8514"
				InputProps={{
					readOnly: true,
				}}
				sx={{ width: 2 / 3 }}
				style={{ margin: 20 }}
			/>
			<TextField
				id="outlined-read-only-input"
				label="My Contact Email"
				defaultValue="Abisek.Gare@stonybrook.edu"
				value={globalUser.email}
				InputProps={{
					readOnly: true,
				}}
				sx={{ width: 2 / 3 }}
				style={{ margin: 20 }}
			/>
			<Button
				variant="outlined"
				color="error"
				onClick={logout}
				style={{ margin: 20 }}
			>
				LogOut
			</Button>
			<NavBottom userValue={props.value} />
		</>
	);
}

const getColoredAxis = (color) => {
	return {
		axis: {
			ticks: {
				line: {
					stroke: color,
				},
				text: { fill: color },
			},
			legend: {
				text: {
					fill: color,
				},
			},
		},
	};
};
