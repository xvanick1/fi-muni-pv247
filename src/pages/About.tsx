import { onSnapshot } from '@firebase/firestore';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

import usePageTitle from '../hooks/usePageTitle';
import PreviewAbout from '../components/PreviewAbout';
import AddAboutItem from '../components/AddAboutItem';
import { AboutItem, aboutItemsCollection } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';
import Bio from '../components/Bio';

const About = () => {
	usePageTitle('About me');

	const [aboutItems, setAboutItems] = useState<
		QueryDocumentSnapshot<AboutItem>[]
	>([]);
	const user = useLoggedInUser();

	useEffect(() => {
		const unsubscribe = onSnapshot(aboutItemsCollection, snapshot => {
			setAboutItems(snapshot.docs);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={5} md={4}>
				<Bio />
			</Grid>
			{aboutItems.length > 0
				? aboutItems
						.reverse()
						.map(doc => <PreviewAbout key={doc.id} doc={doc} />)
				: 'No items yet'}
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
				{user && (
					<AddAboutItem>
						{open => (
							<Button
								variant="text"
								onClick={open}
								startIcon={<AddTwoToneIcon />}
							>
								Add section
							</Button>
						)}
					</AddAboutItem>
				)}
			</Grid>
		</Grid>
	);
};

export default About;
