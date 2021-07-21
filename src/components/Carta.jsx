import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import Menu from './Menu.jsx';
import './Carta.css';

const Carta = (props) => {
    return (
        <div className='Carta'>
            {
                props.list.map((m) => {
                   return <Menu key={m.title} title={m.title} products={m.products}/> 
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { list: state.listProds }
}

export default connect(mapStateToProps)(Carta);