import { setDoc } from '@firebase/firestore';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography
} from '@mui/material';
import { ReactNode, useState } from 'react';

import useField from '../hooks/useField';
import { feedbacksDocument } from '../utils/firebase';

type Props = {
	children: (open: () => void) => ReactNode;
};

const AddFeedback = ({ children }: Props) => {
	const [open, setOpen] = useState(false);
	const [name, nameProps] = useField('name', true);
	const [email, emailProps] = useField('email', true);
	const [feedbackText, feedbackTextProps] = useField('feedbackText', true);
	const [submitError, setSubmitError] = useState<string>();

	// Close and reset handler
	const closeDialog = () => {
		setOpen(false);
		feedbackTextProps.onChange({ target: { value: '' } } as never);
		nameProps.onChange({ target: { value: '' } } as never);
		emailProps.onChange({ target: { value: '' } } as never);
		setSubmitError(undefined);
	};

	const handleSubmit = async () => {
		if (!email || !name || !feedbackText) {
			setSubmitError('Fill all required fields!');
			return;
		}

		try {
			await setDoc(feedbacksDocument(email), {
				by: name,
				email,
				text: feedbackText
			}).then(() => closeDialog());
		} catch (err) {
			setSubmitError((err as { message?: string })?.message ?? 'Unknown error');
			return;
		}
		closeDialog();
	};

	return (
		<>
			{children(() => setOpen(true))}
			<Dialog open={open} onClose={closeDialog}>
				<DialogTitle>Add Feedback</DialogTitle>
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
						label="Name"
						autoComplete="off"
						fullWidth
						{...nameProps}
						sx={{ marginTop: 1 }}
					/>
					<TextField
						label="Email"
						autoComplete="off"
						fullWidth
						{...emailProps}
					/>
					<TextField
						label="Feedback"
						autoComplete="off"
						multiline
						rows={3}
						fullWidth
						{...feedbackTextProps}
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
export default AddFeedback;
