import usePageTitle from '../hooks/usePageTitle';

const Feedback = () => {
	usePageTitle('Feedback');

	return (
		<div>
			Rivjus
			<ul>
				<li>Reviews added by 3rd party, deletable by owner </li>
			</ul>
		</div>
	);
};

export default Feedback;
