import * as actions from '../actions/search';

export const initialState = {
	results: {},
	recent: [],
	input: '',
	page: 1,
	search: true,
	fetching: false,
	error: '',
};

export const search = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_SEARCH:
			return {
				...state,
				results: action.data,
				error: '',
				fetching: false,
			};
		case actions.SET_RECENT:
			return {
				...state,
				recent: action.data,
				fetching: false,
			};
		case actions.SET_ERROR:
			let reset =
				action.key === 'results'
					? { results: {} }
					: { recent: [] };
			return {
				...state,
				...reset,
				error: action.data,
				fetching: false,
			};
		case actions.SET_INPUT:
			return { ...state, input: action.data };
		case actions.SET_PAGE:
			return { ...state, page: action.data };
		case actions.TOGGLE_TAB:
			return {
				...state,
				search: !state.search,
				error: '',
			};
		case actions.START_FETCH:
			return { ...state, fetching: true };
		default:
			return state;
	}
};
