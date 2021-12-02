import AboutGrid from '../components/AboutGrid';
import usePageTitle from '../hooks/usePageTitle';

const About = () => {
	usePageTitle('About me');

	return <AboutGrid />;
};

export default About;
