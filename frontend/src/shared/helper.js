export const searchTerm = (props) => {
	if (props.search.input.trim().length > 0) {
		let url = `http://localhost:3000/query/${encodeURIComponent(
			props.search.input
		)}?page=${props.search.page}`;
		let next = (data) => {
			props.setSearch(data);
			setRecentSearches(props);
		};
		fetchData(url, next, props.setError);
	}
};
export const setRecentSearches = (props) => {
	let url = 'http://localhost:3000/recent';
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
