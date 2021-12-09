import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {}

const theme = createTheme({
	palette: {
		primary: { main: '#F1DC67' },
		mode: 'dark'
	}
});

export default theme;
