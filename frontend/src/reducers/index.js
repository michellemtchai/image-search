import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { search } from './search';

export default combineReducers({
    search: search,
});
