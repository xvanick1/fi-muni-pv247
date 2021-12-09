import { Button, ButtonGroup, Divider, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { DocumentData } from '@firebase/firestore';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

import useLoggedInUser from '../hooks/useLoggedInUser';

import DeleteModal from './DeleteModal';
import EditAboutModal from './EditAboutModal';

const PreviewAbout: FC<DocumentData> = ({ doc }) => {
	const { shortDescription, title } = doc.data();
	const user = useLoggedInUser();

	return (
		<Grid container item style={{ position: 'relative' }}>
			<Grid>
				{user && (
					<ButtonGroup
						variant="text"
						aria-label="outlined button group"
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							textAlign: 'right'
						}}
					>
						<EditAboutModal doc={doc}>
							{open => (
								<Button
									onClick={open}
									style={{ color: 'orange' }}
									aria-label="edit"
									startIcon={<EditTwoToneIcon />}
								>
									Edit
								</Button>
							)}
						</EditAboutModal>
						<DeleteModal collectionName="aboutItem" id={doc.id}>
							{open => (
								<Button
									onClick={open}
									color="error"
									aria-label="delete"
									endIcon={<DeleteOutlineTwoToneIcon />}
								>
									Remove
								</Button>
							)}
						</DeleteModal>
					</ButtonGroup>
				)}
				<Typography gutterBottom variant="h4" component="div">
					{title}
				</Typography>
				<Divider style={{ marginBottom: '5px' }} />
				<Typography variant="body2" color="text.secondary">
					{shortDescription}
				</Typography>
			</Grid>
		</Grid>
	);
};
export default PreviewAbout;
