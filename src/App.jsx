import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Carta from './Carta.jsx';
import './App.css';

const rootEl = document.getElementById('root');

const products = [
        { title: 'Cervezas', products: [{ name:'Doble Ipa', desc:'Que rica la doble ipa', price:'$100' }, { name:'Blone Ale', desc:'Es como la cerveza rubia normal', price:'$100' }] },
        { title: 'Comida', products: [{ name:'Papas con cheddar', desc:'Papas delciosas con cheddar', price:'150' }, { name:'Pizza con muzzarela', desc:'Una pizzeta bien cheta y rica', price:'$200' }] }
    ]

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Carta list={products}/>
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