const SERVER_ROOT =
	process.env.REACT_APP_ENV === 'development'
		? `http://localhost:${process.env.REACT_APP_PORT}`
		: '';
export const searchTerm = (props, page) => {
	let input = props.search.input.trim();
	if (input.length > 0) {
		let url = `${SERVER_ROOT}/query/${encodeURIComponent(
			input
		)}?page=${page}`;
		let next = (data) => {
			props.setSearch(data);
			setRecentSearches(props);
		};
		props.startFetching();
		fetchData(url, next, props.setError, 'results');
	}
};
export const setRecentSearches = (props) => {
	let url = `${SERVER_ROOT}/recent`;
	props.startFetching();
	fetchData(url, props.setRecent, props.setError, 'recent');
};
export const fetchData = (url, stateFn, errorFn, key) => {
	url = encodeURI(url);
	let containsError = false;
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
				containsError = true;
			}
			return res.json();
		})
		.then((data) => {
			if (!containsError) {
				stateFn(data);
			} else {
				errorFn(data.msg, key);
			}
		});
};
