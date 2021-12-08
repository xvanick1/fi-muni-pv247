import { FC } from 'react';
import { Container } from '@mui/material';

import AppBarResponsive from './AppBarResponsive';

import './Layout.css';

const Layout: FC = ({ children }) => (
	<>
		<AppBarResponsive />

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

export default Layout;
