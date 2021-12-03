import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Link,
	Typography
} from '@mui/material';
import { FC } from 'react';

import { PortfolioItem } from '../utils/firebase';

const PortfolioItemPreview: FC<PortfolioItem> = ({
	imageUrl,
	title,
	referenceUrl,
	shortDescription
}) => {
	console.log('asdf');

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link href={referenceUrl} target="_blank">
				<Card>
					<CardContent>
						<CardMedia
							component="img"
							height="140"
							image={imageUrl}
							alt="portfolio image"
							sx={{ marginBottom: 2 }}
						/>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{shortDescription}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</Grid>
	);
};
export default PortfolioItemPreview;
