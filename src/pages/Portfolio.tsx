import usePageTitle from '../hooks/usePageTitle';

const Portfolio = () => {
	usePageTitle('Portfolio');

	return (
		<div>
			Portfolijo
			<ul>
				<li>List of projects linked to some websites</li>
				<li>CRUD with portfolio items for logged in owner</li>
			</ul>
		</div>
	);
};

export default Portfolio;
