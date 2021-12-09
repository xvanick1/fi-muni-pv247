import { Box, Typography } from '@mui/material';

import usePageTitle from '../hooks/usePageTitle';
import homeImage from '../images/homeImage.png';

const NotFound = () => {
	usePageTitle('404 Not Found');

	return (
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
					maxWidth: 'auto',
					marginTop: '200px'
				}}
				src={homeImage}
			/>
			<Typography variant="h2">Not Found</Typography>
			<Typography>Oops, looks like this page does not exist</Typography>
		</Box>
	);
};

export default NotFound;
