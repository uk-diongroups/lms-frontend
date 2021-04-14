import { combineReducers } from 'redux';
import auth from './auth.reducer';
import loader from './loading.reducer';
import message from './message.reducer';

export default combineReducers({
	auth,
	loader,
	message,
});
