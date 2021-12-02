import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

import usePageTitle from '../hooks/usePageTitle';
import { Feedback, feedbacksCollection } from '../utils/firebase';
import FeedbackPreview from '../components/FeedbackPreview';
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
				sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
			>
				<Typography variant="h4">Customer Feedback</Typography>
				<AddFeedback>
					{open => (
						<Button onClick={open} variant="contained" size="small">
							Add Feedback
						</Button>
					)}
				</AddFeedback>
			</Box>
			{feedbacks.map((r, i) => (
				<FeedbackPreview key={i} {...r} />
			))}
		</>
	);
};

export default Feedbacks;