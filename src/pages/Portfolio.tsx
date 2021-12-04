import { onSnapshot } from '@firebase/firestore';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import PortfolioItemPreview from '../components/PortfolioItemPreview';
import AddPortfolioItem from '../components/AddPortfolioItem';
import usePageTitle from '../hooks/usePageTitle';
import { PortfolioItem, portfolioItemsCollection } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';

const Portfolio = () => {
	usePageTitle('Portfolio');

	const [portfolioItems, setPortfolioItems] = useState<
		QueryDocumentSnapshot<PortfolioItem>[]
	>([]);
	const user = useLoggedInUser();

	useEffect(() => {
		const unsubscribe = onSnapshot(portfolioItemsCollection, snapshot => {
			setPortfolioItems(snapshot.docs);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Grid container spacing={2}>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					mb: 2
				}}
				xs={12}
			>
				<Typography variant="h4">My work</Typography>

				{user && (
					<AddPortfolioItem>
						{open => (
							<Button onClick={open} variant="text" size="small">
								Add Portfolio Item
							</Button>
						)}
					</AddPortfolioItem>
				)}
			</Grid>
			{portfolioItems.length > 0
				? portfolioItems.map(doc => (
						<PortfolioItemPreview key={doc.id} doc={doc} />
				  ))
				: 'No portfolio items yet'}
		</Grid>
	);
};

export default Portfolio;
