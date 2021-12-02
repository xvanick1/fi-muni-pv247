import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import Bio from './Bio';
import ShortText from './TextModal';

const AboutGrid: FC = () => (
	<Grid container spacing={2} xs={12}>
		<Grid item xs={4}>
			<Bio />
		</Grid>
		<Grid item xs={8}>
			<ShortText />
		</Grid>
		<Grid item xs={12}>
			<ShortText />
		</Grid>
	</Grid>
);

export default AboutGrid;
