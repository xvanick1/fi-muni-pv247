import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

import usePageTitle from '../hooks/usePageTitle';
import { Feedback, feedbacksCollection } from '../utils/firebase';
import PreviewFeedback from '../components/PreviewFeedback';
import AddFeedback from '../components/AddFeedback';

//feedbacks added by 3rd party, deletable by owner

const Feedbacks = () => {
	usePageTitle('Feedback');

	const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		const unsubscribe = onSnapshot(feedbacksCollection, snapshot => {
			// Access .docs property of snapshot
			setFeedbacks(snapshot.docs.map(doc => doc.data()));
		});
		// Don't forget to unsubscribe from listening to changes
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					mb: 2
				}}
			>
				<Typography variant="h4">Client Feedback</Typography>
				<AddFeedback>
					{open => (
						<Button onClick={open} variant="text" size="small">
							Add Feedback
						</Button>
					)}
				</AddFeedback>
			</Box>
			{feedbacks.length > 0
				? feedbacks.map((r, i) => <PreviewFeedback key={i} {...r} />)
				: 'No feedbacks yet'}
		</>
	);
};

export default Feedbacks;
