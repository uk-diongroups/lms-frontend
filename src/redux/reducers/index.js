import { combineReducers } from 'redux';
import auth from './auth.reducer';
import loader from './loading.reducer';
import message from './message.reducer';
import courses from './courses.reducer';
import assessments from './assessment.reducer';

export default combineReducers({
	auth,
	loader,
	message,
	courses,
	assessments,
});
