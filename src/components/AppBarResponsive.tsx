import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';

import homeLogo from '../images/homeIcon.png';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { signOut } from '../utils/firebase';

const pages = ['About Me', 'Portfolio', 'Feedback'];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						<Link to="/">
							<img height="50" src={homeLogo} alt="Logo" />
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
