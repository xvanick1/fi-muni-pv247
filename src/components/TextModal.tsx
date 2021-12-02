import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, DialogActions, DialogContent, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ReactNode } from 'react';

type ExcerptProps = {
	title: string;
	modalContent: string;
	children: ReactNode;
};

const Excerpt = (props: ExcerptProps) => {
	const [open, setOpen] = React.useState(false);
	const { title, modalContent, children } = props;

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Typography variant="h4" component="div">
				{title}
			</Typography>
			<Divider />
			{/*Here should be shown aprox first 200 characters from the text above in Modal()*/}
			<Box component="div" sx={{ display: 'display-box' }}>
				{children}
			</Box>
			<Button
				variant="text"
				startIcon={<ArrowForwardIosIcon />}
				onClick={handleClickOpen}
			>
				Read more
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				title={title}
				modalContent={modalContent}
			/>
		</>
	);
};

type ModalProps = Pick<ExcerptProps, 'title' | 'modalContent'> & {
	open: boolean;
	onClose: () => void;
};

const Modal = (props: ModalProps) => {
	const { onClose, open, title, modalContent } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<Typography>{modalContent}</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} variant="contained">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Excerpt;
