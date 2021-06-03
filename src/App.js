import React from 'react';
import './scss/index.scss';
import './css/index.css';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import store from 'redux/store';
import { checkExpiredToken } from 'utils/auth';
import { setCurrentUser, logoutUser } from 'redux/actions/auth.action';

if (localStorage.ukdion_employee && checkExpiredToken()) {
	store.dispatch(setCurrentUser(JSON.parse(localStorage.ukdion_employee)));
} else {
	store.dispatch(logoutUser());
}

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
