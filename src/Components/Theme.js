import React from 'react';
import NavBottom from '../Components/NavBottom';
import NavTop from '../Components/NavTop';
import Camera from '../Components/Camera';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { globalState } from '../recoil';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const Home = (props) => {
	const minWidth = window.innerWidth;
	const minHeight = window.innerHeight;
	const [text, setText] = useRecoilState(globalState);
	console.log(text);
	const FireNav = styled(List)({
		'& .MuiListItemButton-root': {
			paddingLeft: 24,
			paddingRight: 24,
		},
		'& .MuiListItemIcon-root': {
			minWidth: 0,
			marginRight: 16,
		},
		'& .MuiSvgIcon-root': {
			fontSize: 20,
		},
	});

	return (
		<>
			{/*<NavTop/>*/}
			<Box sx={{ height: window.innerHeight, display: 'flex' }}>
				<ThemeProvider
					theme={createTheme({
						components: {
							MuiListItemButton: {
								defaultProps: {
									disableTouchRipple: true,
								},
							},
						},
						palette: {
							mode: 'dark',
							primary: { main: 'rgb(102, 157, 246)' },
							background: { paper: 'rgb(5, 30, 52)' },
						},
					})}
				>
					<Paper elevation={0} sx={{ minWidth: minWidth }}>
						<FireNav component="nav" disablePadding>
							<ListItemButton component="a" href="#customized-list">
								<ListItemIcon sx={{ fontSize: 20 }}>❄️</ListItemIcon>
								<ListItemText
									sx={{ my: 0 }}
									primary="Smart Fridge"
									primaryTypographyProps={{
										fontSize: 20,
										fontWeight: 'medium',
										letterSpacing: 0,
									}}
								/>
							</ListItemButton>
							<Divider />
							{props.children}
						</FireNav>
					</Paper>
				</ThemeProvider>
			</Box>
			<NavBottom />
		</>
	);
};

export default Home;
