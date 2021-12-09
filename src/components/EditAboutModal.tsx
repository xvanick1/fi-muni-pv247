import { DocumentData, setDoc } from '@firebase/firestore';
import { ReactNode, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography
} from '@mui/material';

import useField from '../hooks/useField';
import { aboutItemDocument } from '../utils/firebase';

type Props = {
	children: (open: () => void) => ReactNode;
	doc: DocumentData;
};

const EditAboutModal = ({ children, doc }: Props) => {
	const [open, setOpen] = useState(false);
	const [submitError, setSubmitError] = useState<string>();
	const [title, titleProps] = useField('title', true, doc.data().title);
	const [shortDescription, shortDescriptionProps] = useField(
		'shortDescription',
		true,
		doc.data().shortDescription
	);

	const closeDialog = () => {
		setOpen(false);
		setSubmitError(undefined);
	};

	const handleSubmit = async () => {
		try {
			await setDoc(aboutItemDocument(doc.id), {
				title,
				shortDescription
			}).then(() => closeDialog());
		} catch (err) {
			setSubmitError((err as { message?: string })?.message ?? 'Unknown error');
		}
	};

	return (
		<>
			{children(() => setOpen(true))}
			<Dialog open={open} onClose={closeDialog}>
				<DialogTitle>Edit Section Item</DialogTitle>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						width: 500,
						maxWidth: '100%',
						paddingTop: '50px'
					}}
				>
					<TextField
						label="title"
						autoComplete="off"
						fullWidth
						{...titleProps}
					/>
					<TextField
						label="Short description"
						autoComplete="off"
						multiline
						rows={3}
						fullWidth
						{...shortDescriptionProps}
					/>
				</DialogContent>
				<DialogActions>
					{submitError && (
						<Typography
							variant="subtitle2"
							align="left"
							color="error"
							sx={{ marginBottom: 0, marginRight: 'auto' }}
							paragraph
						>
							{submitError}
						</Typography>
					)}
					<Button onClick={closeDialog}>cancel</Button>
					<Button onClick={handleSubmit} variant="contained">
						submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export default EditAboutModal;
