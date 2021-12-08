import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import homeLogo from '../images/homeIcon.png';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { signOut } from '../utils/firebase';

const pages = ['About Me', 'Portfolio', 'Feedback'];

const AppBarResponsive = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const user = useLoggedInUser();

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="md">
				<Toolbar disableGutters>
					<Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						<Link to="/">
							<img height="50" src={homeLogo} alt="Logo" />
						</Link>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'left' }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Button
									className="menuButton"
									style={{ backgroundColor: 'transparent' }}
									component={NavLink}
									exact
									activeClassName="active"
									to="/"
								>
									About me
								</Button>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Button
									className="menuButton"
									style={{ backgroundColor: 'transparent' }}
									component={NavLink}
									exact
									activeClassName="active"
									to="/portfolio"
								>
									Portfolio
								</Button>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Button
									className="menuButton"
									style={{ backgroundColor: 'transparent' }}
									component={NavLink}
									exact
									activeClassName="active"
									to="/feedback"
								>
									Feedback
								</Button>
							</MenuItem>
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'center'
						}}
					>
						<Link to="/">
							<img height="50" src={homeLogo} alt="Logo" />
						</Link>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							className="menuButton"
							style={{ backgroundColor: 'transparent' }}
							component={NavLink}
							exact
							activeClassName="active"
							to="/"
						>
							About me
						</Button>
						<Button
							className="menuButton"
							style={{ backgroundColor: 'transparent' }}
							component={NavLink}
							exact
							activeClassName="active"
							to="/portfolio"
						>
							Portfolio
						</Button>
						<Button
							className="menuButton"
							style={{ backgroundColor: 'transparent' }}
							component={NavLink}
							exact
							activeClassName="active"
							to="/feedback"
						>
							Feedback
						</Button>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					{user && <Button onClick={signOut}>Logout</Button>}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default AppBarResponsive;
