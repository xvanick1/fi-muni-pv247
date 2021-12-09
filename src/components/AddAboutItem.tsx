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
import { addAboutItem } from '../utils/firebase';

type Props = {
	children: (open: () => void) => ReactNode;
};

const AddAboutItem = ({ children }: Props) => {
	const [open, setOpen] = useState(false);
	const [title, titleProps] = useField('title', true);
	const [shortDescription, shortDescriptionProps] = useField(
		'shortDescription',
		true
	);
	const [submitError, setSubmitError] = useState<string>();

	// Close and reset handler
	const closeDialog = () => {
		setOpen(false);
		shortDescriptionProps.onChange({ target: { value: '' } } as never);
		titleProps.onChange({ target: { value: '' } } as never);

		setSubmitError(undefined);
	};

	const handleSubmit = async () => {
		if (!title || !shortDescription) {
			setSubmitError('Fill all required fields!');
			return;
		}

		try {
			await addAboutItem({
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
				<DialogTitle>Add Section Item</DialogTitle>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						width: 750,
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
						rows={5}
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
					<Button onClick={closeDialog}>Cancel</Button>
					<Button onClick={handleSubmit}>Add</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export default AddAboutItem;
