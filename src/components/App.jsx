import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Carta from './Carta.jsx';
import Footer from './Footer.jsx';
import Delivery from './Delivery.jsx';
import background from '../../public/images/TexturesCom_WoodPlanksOld0292_7_seamless_S.jpg'
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    products: [],
    listProds : [
        { title: 'Cervezas', products: [{ name:'Doble Ipa', desc:'Que rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa', price:'$1000' }, { name:'Blone Ale', desc:'Es como la cerveza rubia normal', price:'$100' }] },
        { title: 'Comida', products: [{ name:'Papas con cheddar', desc:'Papas delciosas con cheddar', price:'150' }, { name:'Pizza con muzzarela', desc:'Una pizzeta bien cheta y rica', price:'$200' }] }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type){
        case 'ADD':
            let newProducts = state.products;
            newProducts.push(action.prod);
            return { products: newProducts, listProds: state.listProds };
        default:
            return state;
    }
}

const store = createStore(reducer);

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