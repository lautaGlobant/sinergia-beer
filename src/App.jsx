import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Carta from './Carta.jsx';
import Footer from './Footer.jsx';
import Delivery from './Delivery.jsx';
import background from '../public/images/TexturesCom_WoodPlanksOld0292_7_seamless_S.jpg';
import './App.css';

const rootEl = document.getElementById('root');

const products = [
        { title: 'Cervezas', products: [{ name:'Doble Ipa', desc:'Que rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa', price:'$1000' }, { name:'Blone Ale', desc:'Es como la cerveza rubia normal', price:'$100' }] },
        { title: 'Comida', products: [{ name:'Papas con cheddar', desc:'Papas delciosas con cheddar', price:'150' }, { name:'Pizza con muzzarela', desc:'Una pizzeta bien cheta y rica', price:'$200' }] }
    ]

const App = () => {
    return (
        <div className='App' style={{ backgroundImage: 'url('+background+')' }}>
            <Header />
            <Delivery />
            <Carta list={products}/>
            <Footer />
        </div> 
    );
};

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