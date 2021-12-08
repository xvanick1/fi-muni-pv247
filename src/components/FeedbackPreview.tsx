import {
	Box,
	Card,
	CardContent,
	Grid,
	IconButton,
	Typography
} from '@mui/material';
import { FC } from 'react';
import { Delete } from '@mui/icons-material';

import { Feedback } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';

import DeleteModal from './DeleteModal';

const FeedbackPreview: FC<Feedback> = ({ by, text, email }) => {
	const user = useLoggedInUser();

	return (
		<Grid item xs={12} style={{ position: 'relative' }}>
			{user && (
				<Box
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						textAlign: 'right',
						backgroundColor: '#ffc0cb42'
					}}
				>
					<DeleteModal collectionName="feedback" id={email}>
						{open => (
							<IconButton onClick={open} color="error" aria-label="delete">
								<Delete />
							</IconButton>
						)}
					</DeleteModal>
				</Box>
			)}
			<Card
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
					textAlign: 'left',
					mb: 3
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
		</Grid>
	);
};

export default FeedbackPreview;
