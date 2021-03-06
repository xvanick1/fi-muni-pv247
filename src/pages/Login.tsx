import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import useField from '../hooks/useField';
import usePageTitle from '../hooks/usePageTitle';
import { signIn } from '../utils/firebase';

const Login = () => {
	usePageTitle('Login');

	const { push } = useHistory();

	const [email, usernameProps] = useField('email', true);
	const [password, passwordProps] = useField('password', true);

	const [submitError, setSubmitError] = useState<string>();

	return (
		<Paper
			component="form"
			onSubmit={async (e: FormEvent) => {
				e.preventDefault();
				try {
					await signIn(email, password);
					push('/');
				} catch (err) {
					setSubmitError(
						(err as { message?: string })?.message ?? 'Unknown error occurred'
					);
				}
			}}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				maxWidth: '500px',
				p: 4,
				gap: 2,
				m: 'auto'
			}}
		>
			<Typography variant="h4" component="h2" textAlign="center" mb={3}>
				Sign in
			</Typography>
			<TextField label="Email" {...usernameProps} type="email" />
			<TextField label="Password" {...passwordProps} type="password" />
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					alignItems: 'center',
					alignSelf: 'flex-end',
					mt: 2
				}}
			>
				{submitError && (
					<Typography
						variant="caption"
						textAlign="right"
						sx={{ color: 'error.main' }}
					>
						{submitError}
					</Typography>
				)}
				<Button type="submit" variant="contained">
					SignIn
				</Button>
			</Box>
		</Paper>
	);
};

export default Login;
