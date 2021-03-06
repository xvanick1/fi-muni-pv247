import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Link,
	Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { FC } from 'react';
import { Delete } from '@mui/icons-material';
import { DocumentData } from '@firebase/firestore';

import useLoggedInUser from '../hooks/useLoggedInUser';

import DeleteModal from './DeleteModal';
import EditModal from './EditPortfolioModal';

const PreviewPortfolioItem: FC<DocumentData> = ({ doc }) => {
	const { referenceUrl, shortDescription, title, imageUrl } = doc.data();
	const user = useLoggedInUser();

	return (
		<Grid item xs={12} sm={6} md={4} style={{ position: 'relative' }}>
			{user && (
				<Box
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						textAlign: 'right'
					}}
				>
					<EditModal doc={doc}>
						{open => (
							<IconButton
								onClick={open}
								style={{ color: 'orange' }}
								aria-label="edit"
							>
								<EditIcon />
							</IconButton>
						)}
					</EditModal>
					<DeleteModal collectionName="portfolioItem" id={doc.id}>
						{open => (
							<IconButton onClick={open} color="error" aria-label="delete">
								<Delete />
							</IconButton>
						)}
					</DeleteModal>
				</Box>
			)}
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
export default PreviewPortfolioItem;
