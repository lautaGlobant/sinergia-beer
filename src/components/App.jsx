import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Carta from './Carta.jsx';
import Footer from './Footer.jsx';
import Delivery from './Delivery.jsx';
import background from '../../public/images/TexturesCom_WoodPlanksOld0292_7_seamless_S.jpg'
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addRemoveReducer } from './reducers/addRemoveProdReducer'

const store = createStore(addRemoveReducer);

const App = () => {
    return (
        <div className='App' style={{ backgroundImage: 'url('+background+')' }}>
            <Header />
            <Provider store={store}>
                <Delivery />
                <Carta />
            </Provider>
            <Footer />
        </div> 
    );
};

const rootEl = document.getElementById('root');
const renderApp = () => {
    ReactDOM.render(
        <App />, rootEl
    );
}

renderApp();


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}