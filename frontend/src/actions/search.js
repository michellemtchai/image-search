export const SET_SEARCH = 'SET_SEARCH';
export const SET_RECENT = 'SET_RECENT';
export const SET_ERROR = 'SET_ERROR';
export const SET_INPUT = 'SET_INPUT';
export const SET_PAGE = 'SET_PAGE';
export const TOGGLE_TAB = 'TOGGLE_TAB';

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
const setError = (data) => {
    return {
        type: SET_ERROR,
        data: data,
    };
};
const setInput = (data) => {
    return {
        type: SET_INPUT,
        data: data,
    };
};
const toggleButton = () => {
    return {
        type: TOGGLE_TAB,
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
        setError: (data) => {
            dispatch(setError(data));
        },
        setInput: (data) => {
            dispatch(setInput(data));
        },
        toggleButton: () => {
            dispatch(toggleButton());
        },
    };
};
