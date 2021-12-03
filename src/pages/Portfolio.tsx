import { onSnapshot } from '@firebase/firestore';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import PortfolioItemPreview from '../components/PortfolioItemPreview';
import AddPortfolioItem from '../components/AddPortfolioItem';
import usePageTitle from '../hooks/usePageTitle';
import { PortfolioItem, portfolioItemsCollection } from '../utils/firebase';

const Portfolio = () => {
	usePageTitle('Portfolio');

	const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(portfolioItemsCollection, snapshot => {
			setPortfolioItems(snapshot.docs.map(doc => doc.data()));
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

				<AddPortfolioItem>
					{open => (
						<Button onClick={open} variant="text" size="small">
							Add Portfolio Item
						</Button>
					)}
				</AddPortfolioItem>
			</Grid>
			{portfolioItems.length > 0
				? portfolioItems.map((r, i) => <PortfolioItemPreview key={i} {...r} />)
				: 'No portfolio items yet'}
		</Grid>
	);
};

export default Portfolio;
