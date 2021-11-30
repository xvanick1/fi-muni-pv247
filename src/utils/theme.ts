import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {}

const theme = createTheme({
	palette: {
		primary: { main: '#ffffff' },
		mode: 'dark'
	}
});

export default theme;
