import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {}

const theme = createTheme({
	palette: {
		primary: { main: '#f2d45c' },
		mode: 'dark'
	}
});

export default theme;
