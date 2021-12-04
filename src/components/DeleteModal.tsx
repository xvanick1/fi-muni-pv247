import { deleteDoc } from '@firebase/firestore';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography
} from '@mui/material';
import { ReactNode, useState } from 'react';

import { portfolioItemDocument, feedbacksDocument } from '../utils/firebase';

type Props = {
	children: (open: () => void) => ReactNode;
	collectionName: 'portfolioItem' | 'feedback';
	id: string;
};

const DeleteModal = ({ children, collectionName, id }: Props) => {
	const [open, setOpen] = useState(false);
	const [submitError, setSubmitError] = useState<string>();

	const closeDialog = () => {
		setOpen(false);
		setSubmitError(undefined);
	};

	const handleSubmit = async () => {
		try {
			if (collectionName === 'portfolioItem') {
				await deleteDoc(portfolioItemDocument(id)).then(() => closeDialog());
			} else {
				await deleteDoc(feedbacksDocument(id)).then(() => closeDialog());
			}
		} catch (err) {
			setSubmitError((err as { message?: string }).message ?? 'Unknown error');
		}
	};

	return (
		<>
			{children(() => setOpen(true))}
			<Dialog open={open} onClose={closeDialog}>
				<DialogTitle>Delete item</DialogTitle>
				<DialogContent>Are you sure?</DialogContent>
				<DialogActions>
					{submitError && (
						<Typography
							variant="subtitle2"
							align="left"
							color="error"
							paragraph
						>
							{submitError}
						</Typography>
					)}
					<Button onClick={closeDialog}>Cancel</Button>
					<Button onClick={handleSubmit} variant="contained" color="error">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export default DeleteModal;
