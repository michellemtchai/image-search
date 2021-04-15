const SERVER_ROOT =
	process.env.REACT_APP_ENV === 'development'
		? `http://localhost:${process.env.REACT_APP_PORT}`
		: '';
export const searchTerm = (props) => {
	let input = props.search.input.trim();
	if (input.length > 0) {
		let url = `${SERVER_ROOT}/query/${encodeURIComponent(
			input
		)}?page=${props.search.page}`;
		let next = (data) => {
			props.setSearch(data);
			setRecentSearches(props);
		};
		fetchData(url, next, props.setError);
	}
};
export const setRecentSearches = (props) => {
	let url = `${SERVER_ROOT}/recent`;
	fetchData(url, props.setRecent, props.setError);
};
export const fetchData = (url, stateFn, errorFn) => {
	url = encodeURI(url);
	fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		referrerPolicy: 'no-referrer',
	})
		.then((res) => {
			if (res.status != 200) {
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then((data) => {
			stateFn(data);
			errorFn('');
		})
		.catch((error) => {
			errorFn(error.toString());
		});
};
