import * as actions from '../actions/search';

export const initialState = {
	results: {},
	recent: [],
	input: '',
	page: 1,
	search: true,
	error: ''
}

export const search = (state = initialState, action)=>{
	switch (action.type) {
		case actions.SET_SEARCH:
			return {...state,
				results: action.data
			};
		case actions.SET_RECENT:
			return {...state,
				recent: action.data
			};
		case actions.SET_ERROR:
			return {...state,
				error: action.data
			};
		case actions.SET_INPUT:
			return {...state,
				input: action.data
			};
		case actions.SET_PAGE:
			return {...state,
				page: action.data
			};
		case actions.TOGGLE_TAB:
			return {...state,
				search: !state.search
			};
		default:
		  	return state;
	}
}
