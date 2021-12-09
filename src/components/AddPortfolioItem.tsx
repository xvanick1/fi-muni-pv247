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
import { addPortfolioItem } from '../utils/firebase';

type Props = {
	children: (open: () => void) => ReactNode;
};

const AddPortfolioItem = ({ children }: Props) => {
	const [open, setOpen] = useState(false);
	const [imageUrl, imageUrlProps] = useField('imageUrl', true);
	const [referenceUrl, referenceUrlProps] = useField('referenceUrl', true);
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
		imageUrlProps.onChange({ target: { value: '' } } as never);
		titleProps.onChange({ target: { value: '' } } as never);
		referenceUrlProps.onChange({ target: { value: '' } } as never);

		setSubmitError(undefined);
	};

	const handleSubmit = async () => {
		if (!title || !imageUrl || !shortDescription) {
			setSubmitError('Fill all required fields!');
			return;
		}

		try {
			await addPortfolioItem({
				imageUrl,
				title,
				referenceUrl,
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
				<DialogTitle>Add Portfolio Item</DialogTitle>
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
						label="Image URL"
						autoComplete="off"
						fullWidth
						{...imageUrlProps}
						sx={{ marginTop: 1 }}
					/>
					<TextField
						label="Reference URL"
						autoComplete="off"
						fullWidth
						{...referenceUrlProps}
						sx={{ marginTop: 1 }}
					/>
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
export default AddPortfolioItem;
