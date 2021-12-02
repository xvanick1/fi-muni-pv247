import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Button } from '@mui/material';

import homeLogo from '../images/homeIcon.png';

import './Layout.css';

const Layout: FC = ({ children }) => (
	<>
		<AppBar position="fixed">
			<Container maxWidth="md">
				<Toolbar disableGutters sx={{ gap: 5 }}>
					<img height="50" src={homeLogo} alt="Logo" />
					<Button
						className="menuButton"
						style={{ backgroundColor: 'transparent' }}
						component={Link}
						to="/"
					>
						About me
					</Button>
					<Button
						className="menuButton"
						style={{ backgroundColor: 'transparent' }}
						component={Link}
						to="/portfolio"
					>
						Portfolio
					</Button>
					<Button
						className="menuButton"
						style={{ backgroundColor: 'transparent' }}
						component={Link}
						to="/feedback"
					>
						Feedback
					</Button>
				</Toolbar>
			</Container>
		</AppBar>

		<Container
			maxWidth="md"
			component="main"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				pt: 8
			}}
		>
			{children}
		</Container>
	</>
);
export default Layout;
