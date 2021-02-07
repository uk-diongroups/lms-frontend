import React from 'react';
import './scss/index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes/Routes';
import { logoutUser, setCurrentUser } from 'redux/actions/auth.action';
import { checkExpiredToken } from 'util/auth';

const App = () => {
	if (localStorage.user && checkExpiredToken()) {
		store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
	} else {
		store.dispatch(logoutUser());
	}

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
