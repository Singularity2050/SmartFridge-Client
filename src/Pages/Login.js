import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { globalState } from '../recoil';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="/">
				SmartFridge
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const setGlobalUser = useSetRecoilState(globalState);

	const handleEmail = (e) => {
		setEmail(e);
	};

	const handlePassword = (e) => {
		setPassword(e);
	};

	const handleLogIn = async (e) => {
		navigate('/home');
	};

	const handleRegister = () => {
		navigate('/register');
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container>
				<Grid
					item
					sm={6}
					md={6}
					sx={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
				></Grid>
				<Grid item sm={6} md={6}>
					<Container component="main" maxWidth="xs">
						<Box
							sx={{
								marginTop: 15,
								marginLeft: 1,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Typography component="h1" variant="h5">
								❄ Smart Fridge ❄
							</Typography>
							[Mobile View Only]
							<Box
								component="form"
								// onSubmit={handleSubmit}
								noValidate
								sx={{ mt: 1 }}
							>
								<TextField
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									onChange={(e) => handleEmail(e.target.value)}
								/>
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={(e) => handlePassword(e.target.value)}
								/>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									onClick={(e) => handleLogIn(e)}
								>
									Sign In
								</Button>

								<Grid container>
									<Grid item xs>
										<Button
											sx={{ fontSize: '0.7rem', textDecoration: 'underline' }}
										>
											Forgot password
										</Button>
									</Grid>
									<Grid item>
										<Button
											sx={{ fontSize: '0.7rem', textDecoration: 'underline' }}
											onClick={handleRegister}
										>
											"Sign Up"
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Copyright sx={{ mt: 8, mb: 4 }} />
					</Container>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Login;
