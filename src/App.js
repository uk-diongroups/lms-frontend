import React from 'react';
import './scss/index.scss';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
	return <Routes />;
};

export default App;
