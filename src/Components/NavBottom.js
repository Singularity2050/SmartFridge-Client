import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import LocalSeeIcon from '@mui/icons-material/LocalSee';
import EggIcon from '@mui/icons-material/Egg';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';

export default function NavBottom() {
	const navigate = useNavigate();
	const [value, setValue] = React.useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			sx={{ flexGrow: 1, position: 'fixed', width: '100%' }}
			value={value}
			onChange={handleChange}
		>
			<BottomNavigationAction
				label="Home"
				value="Home"
				icon={<LocalSeeIcon />}
				onClick={() => navigate('/')}
			/>
			<BottomNavigationAction
				label="Ingredient"
				value="Ingredient"
				icon={<EggIcon />}
				onClick={() => navigate('/ingredients')}
			/>
			<BottomNavigationAction
				label="Recipe"
				value="Recipe"
				icon={<LibraryBooksIcon />}
				onClick={() => navigate('/recipes')}
			/>
			<BottomNavigationAction
				label="Favorites"
				value="favorites"
				icon={<FavoriteIcon />}
				onClick={() => navigate('/favorites')}
			/>
			<BottomNavigationAction
				label="Profile"
				value="Profile"
				icon={<PersonIcon />}
				onClick={() => navigate('/profile')}
			/>
		</BottomNavigation>
	);
}
