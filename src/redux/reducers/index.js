import { combineReducers } from 'redux';
import auth from './auth.reducer';
import loader from './loading.reducer';
import message from './message.reducer';
// import appointment from './appointment.reducer';
// import payment from './payment.reducer';

export default combineReducers({
	auth,
	loader,
	message,
	// appointment,
	// payment,
});
