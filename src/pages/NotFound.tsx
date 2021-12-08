import { Box, Typography } from '@mui/material';

import homeImage from '../images/homeImage.png';

const NotFound = () => (
	// TODO: Add usePageTitle hook
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			flexWrap: 'wrap',
			gap: 5
		}}
	>
		<Box
			component="img"
			sx={{
				height: 'auto',
				width: '25%',
				maxHeight: '25%',
				maxWidth: 'auto'
			}}
			src={homeImage}
		/>
		<Typography variant="h2">Not Found</Typography>
		<Typography>Oops, looks like this page does not exist</Typography>
	</Box>
);

export default NotFound;
