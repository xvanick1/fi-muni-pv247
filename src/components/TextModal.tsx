import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type Props = {
	open: boolean;
	onClose: () => void;
};

const ExtendedText = (props: Props) => {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>About me</DialogTitle>
			<Typography>
				<Box>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
					libero. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur, adipisci velit, sed quia non numquam eius modi
					tempora incidunt ut labore et dolore magnam aliquam quaerat
					voluptatem. In rutrum. Aliquam erat volutpat. Ut tempus purus at
					lorem. Praesent vitae arcu tempor neque lacinia pretium. Nullam
					dapibus fermentum ipsum. Aenean id metus id velit ullamcorper
					pulvinar. Etiam posuere lacus quis dolor.
				</Box>
				<Button onClick={() => handleClose()}>Close</Button>
			</Typography>
		</Dialog>
	);
};

const ShortText = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Typography variant="h4" component="div">
				About me
			</Typography>
			<Divider />
			{/*Here should be shown aprox first 200 characters from the text above in ExtendedText()*/}
			<Box component="div" sx={{ display: 'display-box' }}>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
				libero. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora
				incidunt ut labore et dolore magnam aliquam quaerat voluptatem. In
				rutrum. Aliquam erat volutpat. Ut tempus purus at lorem. Praesent vitae
				arcu tempor neque lacinia pretium. Nullam dapibus fermentum ipsum.
				Aenean id metus id velit ullamcorper pulvinar. Etiam posuere lacus quis
				dolor. Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor dictum,
				nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nunc
				tincidunt ante vitae massa. Nulla quis diam.
			</Box>
			<Button
				variant="text"
				startIcon={<ArrowForwardIosIcon />}
				onClick={handleClickOpen}
			>
				Read more
			</Button>
			<ExtendedText open={open} onClose={handleClose} />
		</>
	);
};

export default ShortText;
