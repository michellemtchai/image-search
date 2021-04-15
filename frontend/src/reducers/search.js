import * as actions from '../actions/search';

export const initialState = {
	results: {},
	recent: [],
	input: '',
	page: 1,
	search: true,
	error: '',
};

export const search = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_SEARCH:
			return { ...state, results: action.data, error: '' };
		case actions.SET_RECENT:
			return { ...state, recent: action.data };
		case actions.SET_ERROR:
			let reset =
				action.key === 'results'
					? { results: {} }
					: { recent: [] };
			console.log('error', {
				...state,
				error: action.data,
				...reset,
			});
			return { ...state, error: action.data, ...reset };
		case actions.SET_INPUT:
			return { ...state, input: action.data };
		case actions.TOGGLE_TAB:
			return { ...state, search: !state.search };
		default:
			return state;
	}
};
