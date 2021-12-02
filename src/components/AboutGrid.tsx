import { FC } from 'react';
import { Grid } from '@mui/material';

import Bio from './Bio';
import Excerpt from './TextModal';

const longtextA =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const longtextB =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const AboutGrid: FC = () => (
	<Grid container spacing={2}>
		<Grid item xs={12} sm={5} md={4}>
			<Bio />
		</Grid>
		<Grid item xs={12} sm={7} md={8}>
			<Excerpt title="title1" modalContent={longtextA}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been
			</Excerpt>
		</Grid>
		<Grid item xs={12}>
			<Excerpt title="title2" modalContent={longtextB}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has beenasdfasdfasdfasdorem Ipsum is simply dummy
				text of the printing and typesetting industry. Lorem Ipsum has
				beenasdfasdfasdfasd
			</Excerpt>
		</Grid>
	</Grid>
);

export default AboutGrid;
