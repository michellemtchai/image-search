export const SET_SEARCH = 'SET_SEARCH';
export const SET_RECENT = 'SET_RECENT';
export const SET_ERROR = 'SET_ERROR';
export const SET_INPUT = 'SET_INPUT';
export const SET_PAGE = 'SET_PAGE';
export const TOGGLE_TAB = 'TOGGLE_TAB';
export const START_FETCH = 'START_FETCH';

const setSearch = (data) => {
    return {
        type: SET_SEARCH,
        data: data,
    };
};
const setRecent = (data) => {
    return {
        type: SET_RECENT,
        data: data,
    };
};
const setError = (data, key) => {
    return {
        type: SET_ERROR,
        data: data,
        key: key,
    };
};
const setInput = (data) => {
    return {
        type: SET_INPUT,
        data: data,
    };
};
const setPage = (data) => {
    return {
        type: SET_PAGE,
        data: data,
    };
};
const toggleButton = () => {
    return {
        type: TOGGLE_TAB,
    };
};
const startFetching = () => {
    return {
        type: START_FETCH,
    };
};

export const map = (dispatch) => {
    return {
        setSearch: (data) => {
            dispatch(setSearch(data));
        },
        setRecent: (data) => {
            dispatch(setRecent(data));
        },
        setError: (data, key) => {
            dispatch(setError(data, key));
        },
        setInput: (data) => {
            dispatch(setInput(data));
        },
        setPage: (data) => {
            dispatch(setPage(data));
        },
        toggleButton: () => {
            dispatch(toggleButton());
        },
        startFetching: () => {
            dispatch(startFetching());
        },
    };
};
