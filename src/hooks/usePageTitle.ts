import { useEffect } from 'react';

const usePageTitle = (title: string) => {
	const myName = 'Maria Tortelini';
	useEffect(() => {
		document.title = `${title} | ${myName}`;
	}, [title]);
};

export default usePageTitle;
