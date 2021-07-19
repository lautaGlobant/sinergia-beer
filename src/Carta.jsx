import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu.jsx';

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

export default Carta;