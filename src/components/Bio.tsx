import {
	Avatar,
	Divider,
	Link,
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
		<ListItem style={{ justifyContent: 'center' }}>
			<ListItemAvatar style={{ justifyContent: 'center' }}>
				<Avatar
					style={{
						height: 'auto',
						width: '150px',
						maxWidth: '90%',
						justifyContent: 'center',
						margin: 'auto'
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
			<ListItemText>
				<Link color="primary" href="tel:+421049123456">
					+421 049 123 456
				</Link>
			</ListItemText>
		</ListItem>
		<ListItem>
			<ListItemIcon>
				<AlternateEmailIcon color="primary" />
			</ListItemIcon>
			<ListItemText sx={{ overflowWrap: 'break-word' }}>
				<Link href="mailto:m.tortelini@yahoo.com">m.tortelini@yahoo.com</Link>
			</ListItemText>
		</ListItem>
	</List>
);

export default Bio;
