import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Container, Toolbar, Button, Box } from '@mui/material';

import homeLogo from '../images/homeIcon.png';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { signOut } from '../utils/firebase';

import './Layout.css';

const Layout: FC = ({ children }) => {
	const user = useLoggedInUser();
	return (
		<>
			<AppBar position="static">
				<Container maxWidth="md">
					<Toolbar disableGutters sx={{ gap: 5 }}>
						<Link to="/">
							<img height="50" src={homeLogo} alt="Logo" />
						</Link>
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
						<Box sx={{ flexGrow: 1 }} />
						{user && <Button onClick={signOut}>Logout</Button>}
					</Toolbar>
				</Container>
			</AppBar>

			<Container
				maxWidth="md"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					pt: 3
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default Layout;
