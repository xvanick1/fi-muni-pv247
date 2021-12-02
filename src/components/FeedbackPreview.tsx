import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

import { Feedback } from '../utils/firebase';

const FeedbackPreview: FC<Feedback> = ({ by, text }) => {
	console.log('asdf');

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%',
				textAlign: 'left'
			}}
		>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{by}
				</Typography>
				<Typography variant="h5" component="div">
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default FeedbackPreview;
