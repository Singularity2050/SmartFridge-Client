import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Favourites from './Pages/Favourites';
import Recipes from './Pages/Recipes';
import Ingredients from './Pages/Ingredients';
import NavBottom from './Components/NavBottom';

function App() {
	//Login
	//Registration
	//Main Page
	return (
		<BrowserRouter>
			<Routes>
				{/*<Route path={"/register"} element={<Register/>} />*/}
				<Route exact path={'/'} element={<Home />} />
				<Route path={'/ingredients'} element={<Ingredients />} />
				<Route path={'/recipes'} element={<Recipes />} />
				<Route path={'/favorites'} element={<Favourites />} />
				<Route path={'/profile'} element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
