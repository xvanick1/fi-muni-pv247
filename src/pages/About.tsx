import usePageTitle from '../hooks/usePageTitle';

const About = () => {
	usePageTitle('About me');

	return (
		<div>
			Houm
			<ul>
				<li>CV</li>
				<li>Contact Form</li>
			</ul>
		</div>
	);
};

export default About;
