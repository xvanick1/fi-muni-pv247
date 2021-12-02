import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Bio = () => (
	<List
		style={{
			backgroundColor: 'blue'
		}}
	>
		<ListItem>
			<ListItemAvatar>
				<Avatar
					style={{
						height: '150px',
						width: '150px',
						justifyContent: 'center'
					}}
					alt="Maria Tortelini"
					src="https://pbs.twimg.com/media/CX83rPWWcAAoCVV?format=jpg"
				/>
			</ListItemAvatar>
		</ListItem>
		<ListItem>
			<ListItemText
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
				primary="Maria Tortelini"
			/>
		</ListItem>
		<Divider />
		<ListItem divider>
			<ListItemIcon>
				<PhoneIphoneIcon color="primary" />
			</ListItemIcon>
			<ListItemText>+421 049 123 456</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemIcon>
				<AlternateEmailIcon color="primary" />
			</ListItemIcon>
			<ListItemText>m.tortelini@yahoo.com</ListItemText>
		</ListItem>
	</List>
);

export default Bio;
