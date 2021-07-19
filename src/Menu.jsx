import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'
import './Menu.css';

const Menu = (props) => {
    return (
        <div className='Menu'>
            <h2 style={{paddingTop:'20px'}}>{props.title}</h2>
            <div>
                {
                    props.products.map((p) => {
                        return <Product key={p.name} product={p} />
                    })
                }
            </div>
        </div>
    )
}

export default Menu;